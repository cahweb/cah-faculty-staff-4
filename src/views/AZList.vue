<template>
    <div class="container-fluid">
        <div class="row">
            <template v-for="(person, i) of facultyList">
                <div v-if="[-1, -2, -3, -4].includes(person.id)" :key="i" class="col-12 mt-3">
                    <h2 class="h2 heading-underline">{{ person.name }}</h2>
                </div>
                <faculty v-else-if="tiered || (!tiered && !person.emeritus)" :key="i" :person="person" />
            </template>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

import FacultyButton from '../components/FacultyButton'

export default {
    components: {
        faculty: FacultyButton,
    },
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'format',
            'filterable',
            'tiered',
        ]),
        ...mapGetters([
            'isVertical',
        ]),
        ...mapGetters('faculty', [
            'facultyList',
        ]),
    },
}
</script>

<style lang="scss" scoped>

</style>