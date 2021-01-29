<template>
    <div class="col-md-6 faculty-button" :class="classObj">
        <router-link :to="{name: 'Profile', params: {id: person.id}}" @click="window.scrollTo(0, 0)">
            <div class="faculty-container">
                <headshot v-show="showHeadshot" :imgName="person.photo" :imgExtra="person.photo_extra" :fullname="fullname" />
                <div class="faculty-info" :class="{'has-headshot': !isAZList}">
                    <p class="staff-name">{{ fullname }}</p>
                    <p class="staff-title"><em v-html="title"></em></p>
                    <p class="email">
                        <a :href="`mailto:${person.email}`">{{ person.email }}</a>
                    </p>
                    <p v-if="showInterests"><em v-html="shortInterests"></em></p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>