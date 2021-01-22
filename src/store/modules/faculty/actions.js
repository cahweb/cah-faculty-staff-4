/* eslint no-console: 1 */

import axios from 'axios'

export const actions = {
    async getAllFaculty({dispatch, rootState}) {
        // Our target URL
        const url = rootState.ajaxUrl

        /**
         * Setting that data we're going to send. The action field tells WP's
         * admin-ajax.php which function to run. Our function will verify the
         * nonce (it's looking for $_POST['wpNonce']). The get field tells our
         * handle_ajax() function which actual function we want to run in order
         * to get the data, and the function it'll run is going to need the
         * dept number
         */
        const data = {
            action: 'cah-faculty-staff-4',
            get: 'faculty',
            wpNonce: rootState.nonce,
            dept: rootState.dept,
            multiDept: rootState.multi_dept,
        }

        // Sending the info as a FormData object keeps us from having to set
        // a bunch of extra options with Axios
        const formData = new FormData()

        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value)
        }

        const facultyList = await axios.post(url, formData)
            .then(response => response.data)

        dispatch('setAllFaculty', facultyList)
    },

    async setAllFaculty({commit, dispatch}, facultyList) {
        commit('updateAllFaculty', facultyList)
        dispatch('sortDisplayList', facultyList)
    },

    async sortDisplayList({commit, state, rootState}) {
        const selected = rootState.departments.selected
        const facultyList = state.allFaculty

        const alphaSort = (a, b) => {
            const lnameCompare = a.lname.localeCompare(b.lname)

            if (lnameCompare == 0) {
                return a.fname.localeCompare(b.fname)
            }
            return lnameCompare
        }

        const directorSort = (a, b) => {

            const compare = parseInt(a.subdept[selected][0].ordinal) - parseInt(b.subdept[selected][0].ordinal)
            
            if (compare === 0) {
                return alphaSort(a, b)
            }

            return compare
        }

        let displayList = []

        if (selected !== null) {

            switch(selected) {
                default:
                    displayList = Object.values(facultyList).filter(item => item.subdept[selected] !== undefined && item.subdept[selected].length > 0).sort(directorSort).map(item => item.id)
                    break
            }
        }
        else {
            displayList = Object.values(facultyList).sort(alphaSort).map(item => item.id)
        }

        commit('updateDisplayList', displayList)
    },

    async getEduPub({commit, rootState}, id) {
        const ajaxUrl = rootState.ajaxUrl
        
        const data = {
            action: 'cah-faculty-staff-4',
            wpNonce: rootState.nonce,
            get: 'edu-pub',
            userID: id,
        }

        const formData = new FormData()
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value)
        }

        const eduPub = await axios.post(ajaxUrl, formData)
            .then(response => response.data)

        commit('updateEduPub', {id, ...eduPub})
    },

    async getCourses({commit, rootState}, id) {
        const ajaxUrl = rootState.ajaxUrl

        const data = {
            action: 'cah-faculty-staff-4',
            wpNonce: rootState.nonce,
            get: 'courses',
            userID: id,
        }

        const formData = new FormData()
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value)
        }

        const courses = await axios.post(ajaxUrl, formData)
            .then(response => response.data)

        commit('updateCourses', {id, courses})
    },

    async setInfoRetrieved({commit}, payload) {
        commit('updateInfoRetrieved', payload)
    }
}