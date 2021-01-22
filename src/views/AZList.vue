<template>
    <div class="container-fluid">
        <div class="row">
            <faculty v-for="(person, i) of facultyList" :key="i" :person="person" />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import FacultyButton from '../components/FacultyButton'

export default {
    components: {
        faculty: FacultyButton,
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters('faculty', [
            'facultyList',
        ]),
    },
}
</script>

<style lang="scss" scoped>

</style>