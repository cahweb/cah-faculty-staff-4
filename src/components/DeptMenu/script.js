/* eslint no-console:1 */
import {mapState, mapGetters, mapActions} from 'vuex'

import MenuButton from '../MenuButton'

export default {
    components: {
        'menu-button': MenuButton,
    },
    data() {
        return{}
    },
    computed: {
        displayList() {
            return this.displayOrder.map(id => this.getDept(id))
        },
        selectedName() {
            if (this.selected !== null) {
                return this.getDept(this.selected).name
            }
            else {
                return `A&ndash;Z List`
            }
        },
        ...mapState([
            'multi_dept',
            'has_advising',
            'vertical',
        ]),
        ...mapState('departments', [
            'selected',
        ]),
        ...mapGetters([
            'isVertical',
        ]),
        ...mapGetters('faculty', [
            'getSubdeptCount',
        ]),
        ...mapGetters('departments', [
            'displayOrder',
            'getDept',
        ]),
    },
    methods: {
        changeDept(id) {
            this.deactivateButtons()
            this.changeActiveDept(id)
            window.scrollTo(0, 0)
        },
        deactivateButtons() {
            this.$refs.azList.setActive(false)
            for (const item of this.$refs.subList) {
                item.setActive(false)
            }
        },
        showSubdept(dept) {
            if (dept.id == 75 && !this.has_advising)
                return false

            return dept.parent == 0 || this.getSubdeptCount(dept.id) > 0
        },
        ...mapActions('departments', [
            'getDepts',
            'changeActiveDept',
        ]),
    },
}