<template>
    <div class="container-fluid" v-if="dept !== undefined">
        <div class="row">
            <faculty v-for="(person, i) of facultyList" :key="i" :person="person" />
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
        return {}
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
        ...mapState('departments', [
            'selected',
        ]),
    },
    methods: {
        ...mapActions('departments', [
            'changeActiveDept',
        ]),
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (to.name == "SubDepartment" && from.name == null && vm.$store.state.departments.selected === null) {
                vm.$store.dispatch('departments/setSelected', to.params.id)
            }
        })
    },
}
</script>

<style lang="scss" scoped>

</style>