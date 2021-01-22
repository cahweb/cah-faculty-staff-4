import Vue from 'vue'

export const mutations = {
    updateAllFaculty(state, facultyList) {
        Vue.set(state, 'allFaculty', facultyList)
    },

    updateDisplayList(state, displayList) {
        Vue.set(state, 'displayList', displayList)
    },

    updateEduPub(state, {id, edu, pub}) {
        const facultyList = state.allFaculty

        const profile = facultyList[id]

        profile.edu = edu
        profile.pub = pub

        facultyList[id] = profile

        Vue.set(state, 'allFaculty', facultyList)
    },

    updateCourses(state, {id, courses}) {
        const facultyList = state.allFaculty

        const profile = facultyList[id]

        profile.courses = courses

        facultyList[id] = profile

        Vue.set(state, 'allFaculty', facultyList)
    },

    updateInfoRetrieved(state, {id, value}) {
        const facultyList = state.allFaculty
        
        const profile = facultyList[id]

        profile.infoRetrieved = value

        facultyList[id] = profile

        Vue.set(state, 'allFaculty', facultyList)
    }
}