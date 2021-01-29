export const getters = {
    facultyList: state => state.displayList.map( id => state.allFaculty[id] ),
    getProfile: (state) => (id) => {
        return state.allFaculty[id]
    },
    getSubdeptCount: state => id => {
        return Object.values(state.allFaculty).filter(item => !!item.subdept && item.subdept[id] !== undefined).length
    }
}