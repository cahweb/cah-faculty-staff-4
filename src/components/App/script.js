import {mapActions, mapState, mapGetters} from 'vuex'

import DeptMenu from '../DeptMenu'

export default {
    components: {
        "dept-menu": DeptMenu,
    },
    data() {
        return{}
    },
    computed: {
        isLoaded() {
            return Object.keys(this.allFaculty).length > 0
        },
        ...mapState([
            'dept',
            'nonce',
            'filterable',
            'vertical',
            'isApple',
            'windowHistoryLength',
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
        goBack() {
            return this.$router.go(-1)
        },
        ...mapActions([
            'appInit',
            'getInitData',
            'setIsLoaded',
            'checkSafari',
        ]),
    },
    created() {
        this.checkSafari()
        this.appInit()
            .then(() => {this.getInitData()})
            .then(() => {this.setIsLoaded(true)})
    },
}