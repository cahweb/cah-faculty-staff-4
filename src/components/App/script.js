import {mapActions, mapState, mapGetters} from 'vuex'

import DeptMenu from '../DeptMenu'

export default {
    components: {
        "dept-menu": DeptMenu,
    },
    data() {
        return{
            tieredAtStart: false
        }
    },
    computed: {
        // Keeps us from getting errors from invalid or null keys
        isLoaded() {
            return Object.keys(this.allFaculty).length > 0
        },
        imgUri() {
            return `${this.pluginDirURI}dist/img`
        },

        // State variables and getters to keep up with the Store
        ...mapState([
            'dept',
            'nonce',
            'filterable',
            'vertical',
            'isApple',
            'windowHistoryLength',
            'tiered',
            'format',
            'pluginDirURI',
        ]),
        ...mapState('faculty', [
            'allFaculty',
        ]),
        ...mapState('departments', [
            'isSmallScreen',
        ]),
        ...mapGetters([
            'spinCssVars',
            'isVertical',
        ]),
    },
    methods: {
        // Makes the "Back" button work.
        goBack() {
            return this.$router.go(-1)
        },
        // Actions from the store
        ...mapActions([
            'appInit',
            'getInitData',
            'setIsLoaded',
            'checkSafari',
            'changeFormat',
        ]),
    },
    created() {
        // Checks to see if we're on an Apple browser, because some stuff gets screwy on iOS for some reason
        this.checkSafari()
        // Initialize the app, then grab the data and signal that we've loaded everything.
        this.appInit()
            .then(() => {this.getInitData()})
            .then(() => {this.setIsLoaded(true)})
    },
    mounted() {
        this.tieredAtStart = this.tiered && !this.filterable
    }
}