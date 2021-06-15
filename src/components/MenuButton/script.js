import {mapState, mapGetters} from 'vuex'

export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        goTo: {
            type: String,
            default: 'AZList',
        },
        goToParams: {
            type: Object,
            default: undefined,
        },
        forceTop: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return{
            isActive: false,
        }
    },
    computed: {
        routerTo() {
            return this.goToParams?.id !== null ? {name: this.goTo, params: this.goToParams} : `/${this.baseUrl}`
        },
        classObj() {
            return {"sub-item": !this.forceTop, active: this.isActive}
        },
        isActiveItem() {
            return (this.goTo == 'AZList' && this.selected === null) || (this.goToParams !== undefined && this.selected == this.goToParams.id)
        },
        ...mapState([
            'baseUrl',
        ]),
        ...mapState('departments', [
            'selected',
            'isSmallScreen',
        ]),
        ...mapGetters([
            'isVertical',
        ]),
    },
    methods: {
        activate() {
            this.$emit('buttonClick')
            this.setActive(true)
        },
        setActive(active) {
            this.isActive = active
        },
    },
    mounted() {
        if ((this.selected == null && !this.goToParams) || 
            (this.goToParams?.id == this.selected))
        {
            this.activate()
        }
    }
}