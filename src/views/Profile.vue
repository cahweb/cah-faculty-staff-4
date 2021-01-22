<template>
    <div class="container-fluid mt-3" v-if="profile !== undefined">
        <div class="row">
            <div class="col d-flex flex-row mb-3">
                <headshot :imgName="profile.photo" :imgExtra="profile.photo_extra" :fullname="fullname" />
                <div class="faculty-info">
                    <h3>{{ fullname }}</h3>
                    <p class="mb-2"><em>{{ titles }}</em></p>
                    <p><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></p>
                    <p v-if="profile.phone !== null"><a :href="`tel:${rawPhone}`">{{ profile.phone }}</a></p>
                    <p v-if="!!profile.office">Office Hours: {{ profile.office }}</p>
                    <p v-if="!!profile.room">
                        Campus Location:
                        <a v-if="!!profile.building" :href="`https://map.ucf.edu/locations/${profile.building}`" target="_blank" rel="noopener"> {{ profile.room_desc + profile.room }}</a>
                        <span v-else>{{ profile.room_desc + profile.room }}</span>
                    </p>
                    <p v-if="profile.has_cv === '1'">
                        <a :href="`https://cah.ucf.edu/common/files/cv/${profile.id}.pdf`">View CV</a>
                    </p>
                    <p v-if="!!profile.homepage">
                        <a :href="profile.homepage" target="_blank" rel="noopener">View Personal Website</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col mb-3" v-html="bio"></div>
        </div>
        <div class="row">
            <list v-if="!!profile.interests" heading="Research Interests" :text="profile.interests" />
        </div>
        <div class="row">
            <list v-if="!!profile.research" heading="Recent Research Activities" :text="profile.research" />
        </div>
        <div v-show="!(profile.infoRetrieved && !profile.edu.length)" class="row">
            <div v-if="!!profile.edu && profile.edu.length" class="col" id="education">
                <h3 class="heading-underline">Education</h3>
                <ul>
                    <li v-for="(degree, i) of profile.edu" :key="i">{{ degreeLine(degree) }}</li>
                </ul>
            </div>
            <div v-else-if="!profile.infoRetrieved" class="col-2 mx-auto d-flex justify-content-center align-items-center">
                <div :style="spinCssVars" class="spin" aria-label="Loading; please wait."></div>
            </div>
        </div>
        <div v-show="!(profile.infoRetrieved && !profile.pub.length)" class="row">
            <div v-if="!!profile.pub && profile.pub.length" class="col" id="publications">
                <h3 class="heading-underline">Publications</h3>
                <template v-for="(pubType, i) of sortedPubs">
                    <div :key="i">
                        <h4 class="pt-2">{{ pubType.type }}</h4>
                        <ul>
                            <li v-for="(pub, j) of pubType.pubs" :key="j" v-html="pubLine(pub)"></li>
                        </ul>
                    </div>
                </template>
            </div>
            <div v-else-if="!profile.infoRetrieved" class="col-2 mx-auto d-flex justify-content-center align-items-center">
                <div :style="spinCssVars" class="spin" aria-label="Loading; please wait."></div>
            </div>
        </div>
        <div v-show="!(profile.infoRetrieved && !Object.values(profile.courses).length)" class="row">
            <div v-if="!!profile.courses && Object.values(profile.courses).length" class="col" id="courses">
                <courses :courseList="profile.courses" />
            </div>
            <div v-else-if="!profile.infoRetrieved" class="col-2 mx-auto d-flex justify-content-center align-items-center">
                <div :style="spinCssVars" class="spin" aria-label="Loading; please wait."></div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'underscore'

import {mapGetters, mapActions, mapState} from 'vuex'

import FacultyHeadshot from '../components/FacultyHeadshot'
import FacultyDetailFormattedList from '../components/FacultyDetailFormattedList'
import CourseList from '../components/CourseList'

export default {
    components: {
        headshot: FacultyHeadshot,
        list: FacultyDetailFormattedList,
        courses: CourseList,
    },
    data() {
        return {
            isWatched: false,
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        cssVars() {
            return {
                'background-image': `url('${this.pluginDirURI}/img/cah-loading-icon.png')`,
                'background-repeat': 'no-repeat',
                'background-size': 'contain',
            }
        },
        profile() {
            return this.getProfile(this.id)
        },
        fullname() {
            if (this.profile === undefined) return ''

            return `${this.profile.fname} ${this.profile.mname && this.profile.mname.length > 0 ? `${this.profile.mname } ` : ''}${this.profile.lname}`
        },
        titles() {
            
            const subdeptList =  Object.values(this.profile.subdept).map(subdeptArray => subdeptArray.sort((a, b) => a.title_id - b.title_id).map(item => this.prog_title_only ? item.prog_title : item.title))
            const titleArray = []

            for (const subdept of subdeptList) {
                for (const title of subdept) {
                    if (!titleArray.includes(title))
                        titleArray.push(title)
                }
            }

            return titleArray.join(', ')
        },
        bio() {
            return _.unescape(this.profile.bio)
        },
        sortedPubs() {
            if (!this.profile.pub || !this.profile.pub.length) return []

            const types = {}

            for (const pub of this.profile.pub) {
                if (types[pub.pubType] === undefined) {
                    types[pub.pubType] = {
                        type: pub.pubType,
                        pubs: [],
                    }
                }

                const newPub = {
                    date: pub.pubDate,
                    citation: pub.citation,
                    forthcoming: pub.forthcoming === "0" ? false : true,
                }

                types[pub.pubType].pubs.push(newPub)
            }

            return Object.values(types).sort((a, b) => {
                const precedence = [
                    'Books',
                    'Films',
                    'Television Shows',
                    'Edited Collections',
                    'Edited Editions',
                    'Television Episodes',
                    'Articles/Essays',
                    'Artwork',
                    'Book Sections/Chapters',
                    'Exhibitions',
                    'Musical Compositions',
                    'Performances',
                    'Recordings',
                    'Creative Publications',
                    'Translation',
                    'Book Reviews',
                    'Conference Papers/Presentations',
                    'Invited Lectures/Presentations',
                    'Miscellaneous Publications',
                ]

                return precedence.findIndex(element => element === a.type) - precedence.findIndex(element => element === b.type)
            })
        },
        rawPhone() {
            const rawPhone = this.profile.phone.replace(/[^0-9+]/, '')

            if (rawPhone.length == 12 && /^\+/.test(rawPhone)) {
                return rawPhone
            }
            else if (rawPhone.length == 11 && !/^\+/.test(rawPhone)) {
                return `+${rawPhone}`
            }
            else {
                return `+1${rawPhone}`
            }
        },
        ...mapGetters([
            'spinCssVars',
        ]),
        ...mapGetters('faculty', [
            'getProfile',
        ]),
        ...mapGetters('departments', [
            'getDept',
        ]),
        ...mapState([
            'pluginDirURI',
            'prog_title_only'
        ]),
    },
    methods: {
        degreeLine(degree) {
            return `${degree.degree} in ${degree.field}${ degree.institution.length ? ` from ${degree.institution}` : ''} (${degree.year})`
        },
        pubLine(pub) {
            const citation = _.unescape(pub.citation).replace(/<br\s?\/?>/i, '')

            return `${citation}${pub.forthcoming ? ` <em>Forthcoming</em>` : ''}`
        },
        ...mapActions('faculty', [
            'getEduPub',
            'getCourses',
            'setInfoRetrieved',
        ]),
    },
    beforeRouteUpdate() {
        window.scrollTo(0, 0)
    },
    created() {
        const getDetailInfo = async () => {
            this.getEduPub(this.id)
            this.getCourses(this.id)
                .then(() => {
                    this.setInfoRetrieved({id: this.id, value: true})
                })
        }

        if (this.getProfile(this.id) === undefined) {
            this.unwatch = this.$store.watch(
                (state, getters) => getters['faculty/getProfile'](this.id),
                () => {
                    this.isWatched = true
                    getDetailInfo()
                }
            )
        }
        else if (this.getProfile(this.id).infoRetrieved === false) {
            getDetailInfo()
        }
    },
    beforeDestroy() {
        if (this.isWatched) 
            this.unwatch()
    },
}
</script>

<style lang="scss" scoped>

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spin {
    display: block;
    margin-top: 5em;
    width: 50px;
    height: 50px;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
}

#publications {
    /deep/ ul {
        li {
            p {
                margin: 0;
            }
        }
    }
}

.faculty-info {
    p {
        margin-bottom: 1em;
    }
}
</style>