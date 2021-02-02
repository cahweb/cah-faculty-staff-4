import {mapState} from 'vuex'

export default {
    props: {
        imgName: {
            type: String,
            default: 'profilephoto.jpg',
        },
        imgExtra: {
            type: String,
            default: '',
        },
        size: {
            type: Number,
            default: 2,
        },
        fullname: {
            type: String,
            default: '',
        },
    },
    data() {
        return{}
    },
    computed: {
        classObj() {
            return `${this.shapeClasses} ${this.$route.name == 'Profile' && !this.isSmallScreen ? 'profile-size' : ''}`
        },
        shapeClasses() {
            switch (this.img_shape) {
                case 'circle':
                    return 'img-circle'
                
                case 'round-square':
                    return 'rounded'
                
                case 'square':
                default:
                    return ''
            }
        },
        filename() {
            return !this.imgName || this.imgName.length === 0 ? 'profilephoto.jpg' : this.imgName
        },
        ...mapState([
            'img_shape',
        ]),
        ...mapState('departments', [
            'isSmallScreen',
        ]),
    },
}