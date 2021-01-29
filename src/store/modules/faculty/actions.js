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

    async setAllFaculty({commit, dispatch, rootState}, facultyList) {
        if (rootState.tiered) {
            const dividers = {
                '-1': {
                    id: -1,
                    name: 'Full Time',
                },
                '-2': {
                    id: -2,
                    name: 'Part Time',
                },
                '-3': {
                    id: -3,
                    name: 'Staff',
                },
            }

            facultyList = {...dividers, ...facultyList}
        }

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

        const tieredSort = list => {
            const fullTime = []
            const partTime = []
            const staff = []

            const ftPatt = /Faculty/
            const ptPatt = /part-time/i

            Object.values(list).forEach(item => {
                switch (item.id) {
                    case -1:
                        fullTime.unshift(item)
                        break
                    case -2:
                        partTime.unshift(item)
                        break
                    case -3:
                        staff.unshift(item)
                        break
                    default:
                        if (ptPatt.test(item.title_group)) {
                            partTime.push(item)
                        }
                        else if (ftPatt.test(item.title_group)) {
                            fullTime.push(item)
                        }
                        else {
                            staff.push(item)
                        }
                        break
                }
            })

            const headerSort = (a, b) => {
                if ([-1, -2, -3].includes(a.id)) {
                    return -1
                }
                else if ([-1, -2, -3].includes(b.id)) {
                    return 1
                }

                if (selected !== null) {
                    return directorSort(a, b)
                }
                else {
                    return alphaSort(a, b)
                }
            }

            const subdeptFilter = item => [-1, -2, -3].includes(item.id) || (item.subdept[selected] !== undefined && item.subdept[selected].length > 0)

            let tmpList = []

            for (const group of [fullTime, partTime, staff]) {
                if (group.length > 1) {
                    tmpList.push(group)
                }
            }

            let returnList = []

            for (const group of tmpList) {
                let filteredGroup = []
                if (selected !== null) {
                    filteredGroup = group.filter(subdeptFilter)
                }
                else {
                    filteredGroup = group
                }

                if (filteredGroup.length > 1) {
                    returnList.push(filteredGroup.sort(headerSort))
                }
            }

            return returnList.flat().map(item => item.id)
        }

        let displayList = []

        if (selected !== null && !rootState.tiered) {
            displayList = Object.values(facultyList).filter(item => !!item.subdept && item.subdept[selected] !== undefined && item.subdept[selected].length > 0).sort(directorSort).map(item => item.id)
        }
        else if (rootState.tiered) {
            displayList = tieredSort(facultyList)
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