/* eslint no-console:1 */
import {mapState, mapGetters, mapActions} from 'vuex'

import MenuButton from '../MenuButton'

export default {
    components: {
        'menu-button': MenuButton,
    },
    data() {
        return{
            breakpoint: 994,
            windowWidth: 0,
        }
    },
    computed: {
        displayList() {
            // Sort the Emeritus "Subdepartment" to the end of the list, then replace them for the actual objects
            return this.displayOrder.sort((a, b) => {
                if (a == 81)
                    return 1
                else if (b == 81)
                    return -1
                else
                    return 0
            })
                .map(id => this.getDept(id))
        },
        selectedName() {
            if (this.selected !== null) {
                return this.getDept(this.selected).name
            }
            else {
                return `A&ndash;Z List`
            }
        },
        isSmallScreen() {
            const isSmallScreen = this.windowWidth <= this.breakpoint
            this.setIsSmallScreen(isSmallScreen)
            return isSmallScreen
        },
        ...mapState([
            'multi_dept',
            'has_advising',
            'vertical',
            'isApple',
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
            this.deactivateButtons(id)
            this.changeActiveDept(id)
            window.scrollTo(0, 0)
        },
        deactivateButtons(activeDept = null) {
            if (activeDept !== null)
                this.$refs.azList.setActive(false)

            for (const item of this.$refs.subList) {
                if (item.goToParams.id != activeDept)
                    item.setActive(false)
            }
        },
        showSubdept(dept) {
            if (dept.id == 75 && !this.has_advising)
                return false

            if (dept.id == 81)
                return this.getSubdeptCount(dept.id) > 0 ? true : false

            return (this.multi_dept && dept.parent == 0) || this.getSubdeptCount(dept.id) > 0
        },
        onResize() {
            this.windowWidth = window.innerWidth
        },
        ...mapActions('departments', [
            'getDepts',
            'changeActiveDept',
            'setIsSmallScreen',
        ]),
    },

    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
}