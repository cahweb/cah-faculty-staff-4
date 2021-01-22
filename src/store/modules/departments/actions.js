/* eslint no-console: 1*/
import axios from 'axios'

export const actions = {
    async getDepts({dispatch, rootState}) {
        const data = {
            action: 'cah-faculty-staff-4',
            get: 'subdepts',
            dept: rootState.dept,
            multiDept: rootState.multi_dept,
            wpNonce: rootState.nonce,
        }

        const formData = new FormData()

        for (const [key, value] of Object.entries(data)) {
            formData.append( key, value )
        }

        axios.post(rootState.ajaxUrl, formData)
            .then(response => {
                dispatch('setDepts', response.data)
            })
    },

    async setDepts({commit}, depts) {
        commit('updateDepts', depts)
    },

    async changeActiveDept({dispatch}, dept) {
        dispatch('setSelected', dept)
            .then(() => {
                dispatch('faculty/sortDisplayList', null, {root: true})
            })
    },

    async setSelected({commit}, dept) {
        commit('updateSelected', dept)
    }
}