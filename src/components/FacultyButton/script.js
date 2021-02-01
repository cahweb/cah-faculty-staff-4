import {mapState, mapGetters} from 'vuex'

import FacultyHeadshot from '../FacultyHeadshot'

export default {
    components: {
        headshot: FacultyHeadshot,
    },
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
    data() {
        return{}
    },
    computed: {
        classObj() {
            return {
                'col-xl-4': (this.isAZList && !this.isVertical && !this.tiered) ||
                            (this.isVertical && this.tiered) ||
                            (this.format == 'picture'),
                'col-lg-4 col-xl-3': (this.isAZList && this.isVertical && !this.tiered),
            }
        },
        fullname() {
            if (!this.person) return ''

            return `${this.person.fname} ${this.person.mname && this.person.mname.length > 0 ? `${this.person.mname} ` : ''}${this.person.lname}`
        },
        title() {
            let titleStr = ''

            let subdeptList

            if (this.prog_title_only) {
                let titleObj = {}
                if (this.selected === null) {
                    subdeptList = Object.values(this.person.subdept)
                    titleObj = subdeptList[0][0]
                }
                else {
                    if (!this.person.subdept[this.selected]) return ''
                    titleObj = this.person.subdept[this.selected][0]
                }
                titleStr = titleObj.title_short.length > 0 ? titleObj.title_short : (titleObj.prog_title.length > 0 ? titleObj.prog_title : titleObj.title)
            }
            else {

                if (this.selected === null) {
                    subdeptList = Object.values(this.person.subdept).map(subdeptArray => subdeptArray.sort((a, b) => a.title_id - b.title_id))
                    const titleArray = []
                    
                    for (const subdept of subdeptList) {
                        for (const {title, title_short} of subdept) {
                            let tempTitle = title_short.length > 0 ? title_short : title
                            if (!titleArray.includes(tempTitle))
                                titleArray.push(tempTitle)
                        }
                    }
                    
                    titleStr = titleArray.join(', ')
                }
                else {
                    subdeptList = this.person.subdept[this.selected]

                    if (subdeptList && subdeptList.length === 1 ) {
                        titleStr = subdeptList[0].title
                    }
                    else if (subdeptList) {
                        for (const subdept of subdeptList) {
                            if (/director|chair/i.test(subdept.title) && subdept.ordinal < 100) {
                                titleStr = subdept.title
                                break
                            }
                            else if (/director|chair/i.test(subdept.title) && subdept.ordinal === 100) {
                                continue
                            }
                            else {
                                titleStr = subdept.title
                            }
                        }
                    }
                }
            }

            return titleStr
        },
        showHeadshot() {
            return !this.isAZList || this.format === 'picture' || this.tiered
        },
        showInterests() {
            return this.include_interests && (this.selected !== null || this.format === 'picture')
        },
        shortInterests() {
            let rawInterests = this.person.interests
            let interestsArr = []

            if (rawInterests) {
                if (/<ul>/.test(rawInterests)) {
                    const list = new DOMParser().parseFromString(rawInterests, 'text/html')
                    list.querySelectorAll('li').forEach(item => {interestsArr.push(item.textContent)})
                }
                else {
                    rawInterests = rawInterests.replace(/<br\s?\/?>/g, '')
                    rawInterests = rawInterests.replace(/<\/?p>/g, '')

                    if (/;/.test(rawInterests)) {
                        interestsArr = rawInterests.split(';')
                    }
                    else if (/,/.test(rawInterests) && interestsArr.length <= 2) {
                        interestsArr = rawInterests.split(',')
                    }
                    else if (rawInterests.match(/./g).length > 1 || rawInterests.indexOf('.') !== rawInterests.length - 1 ) {
                        interestsArr = rawInterests.split('.')
                    }
                }

                interestsArr = interestsArr.map(item => item.trim())

                let interestsOut = ''

                for (let i = 0; i < interestsArr.length; i++) {
                    interestsOut += interestsArr[i]

                    if (i + 1 == interestsArr.length) {
                        interestsOut += '.'
                        break
                    }
                    if (interestsOut.length >= 30) {
                        interestsOut += '&hellip;'
                        break
                    }
                    else {
                        interestsOut += ', '
                    }
                }
                return `Interests: ${interestsOut}`
            }
            
            return ''
        },
        isAZList() {
            return this.selected === null
        },
        ...mapState([
            'include_interests',
            'filterable',
            'format',
            'prog_title_only',
            'tiered',
        ]),
        ...mapState('departments', [
            'selected',
        ]),
        ...mapGetters([
            'isVertical',
        ]),
    },
}