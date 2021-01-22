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
    },
}