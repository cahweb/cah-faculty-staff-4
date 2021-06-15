<template>
    <div class="container-fluid" v-if="dept !== undefined">
        <div class="row">
            <template v-for="(person, i) of facultyList">
                <div v-if="[-1, -2, -3, -4].includes(person.id)" :key="i" class="col-12 mt-3">
                    <h2 class="h2 heading-underline">{{ person.name }}</h2>
                </div>
                <faculty v-else-if="(id == 81 && person.emeritus) || (id !== 81 && !person.emeritus)" :key="i" :person="person" />
            </template>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

import FacultyButton from '../components/FacultyButton'

export default {
    components: {
        faculty: FacultyButton,
    },
    data() {
        return {
            isWatched: false,
        }
    },
    computed: {
        dept() {
            return this.getDept(this.id)
        },
        id() {
            return this.$route.params.id
        },
        ...mapGetters('faculty', [
            'facultyList',
        ]),
        ...mapGetters('departments', [
            'getDept',
        ]),
        ...mapState([
            'isLoaded',
        ]),
        ...mapState('departments', [
            'selected',
        ]),
    },
    methods: {
        ...mapActions('faculty', [
            'sortDisplayList',
        ]),
        ...mapActions('departments', [
            'changeActiveDept',
        ]),
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (to.name == "SubDepartment" && (from.name == null || vm.$store.state.departments.selected === null)) {
                vm.$store.dispatch('departments/setSelected', to.params.id)
                    .then(() => {vm.$store.dispatch('faculty/sortDisplayList')})
            }
        })
    },
    created() {
        if (!this.isLoaded) {
            this.unwatch = this.$store.watch(
                (state) => state.isLoaded,
                () => {
                    this.isWatched = true
                    this.sortDisplayList()
                }
            )
        }
    },
    beforeDestroy() {
        if (this.isWatched) {
            this.unwatch()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>