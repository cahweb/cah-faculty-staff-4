export default {
    props: {
        courseList: {
            type: Object,
            required: true,
        },
    },
    data() {
        return{
            displayedTerm: '',
        }
    },
    computed: {
        currentTerm() {
            const today = new Date()
            const month = today.getMonth() + 1 // Months are 0-indexed, so add 1 for actual calendar number
            const year = today.getFullYear()

            let term = ''

            if (month >= 1 && month < 5) {
                term = 'Spring'
            }
            else if (month >= 5 && month < 8) {
                term = 'Summer'
            }
            else {
                term = 'Fall'
            }

            return `${term} ${year}`
        },
        isSummer() {
            return /summer/i.test(this.displayedTerm)
        },
        termList() {
            return Object.keys(this.courseList).sort((a, b) => {
                const yearCompare = parseInt(a.substr(-4)) - parseInt(b.substr(-4))

                if (yearCompare === 0) {
                    const termOrder = {
                        spring: 1,
                        summer: 2,
                        fall: 3,
                    }

                    return termOrder[a.substr(0, a.length - 5).toLowerCase()] - termOrder[b.substr(0, b.length - 5).toLowerCase()]
                }

                return yearCompare
            })
        }
    },
    methods: {
        isCurrentTerm(term) {
            return this.currentTerm === term
        },
        getSyllabusLink(course) {
            const urlBase = `https://cah.ucf.edu/common/files/syllabi/`
            const fileName = `${course.catalogRef.replace(' ', '')}${course.section}${this.displayedTerm.replace(' ', '')}`

            return `<a href="${urlBase}${fileName}.pdf" rel="external">Available</a>`
        },
        changeDisplayedTerm(term) {
            this.displayedTerm = term
        }
    },
    mounted() {
        this.displayedTerm = this.currentTerm
    },
}