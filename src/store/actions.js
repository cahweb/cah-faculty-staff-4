import _ from 'underscore'
import axios from 'axios'

export const actions = {
    async appInit({dispatch}) {
        dispatch('getNonce')
        dispatch('getOptions')
    },

    getNonce({commit}) {
        const nonceField = document.querySelector('input[name=wp-nonce]')
        const nonce = nonceField.value

        commit('setNonce', nonce)

        nonceField.remove()
    },

    getOptions({commit}) {
        const optionsField = document.querySelector('input[name=options]')
        const options = JSON.parse(_.unescape(optionsField.value))

        commit('setOptions', options)

        optionsField.remove()
    },

    async getInitData({state, dispatch}) {
        const url = state.ajaxUrl

        const data = {
            action: 'cah-faculty-staff-4',
            get: 'init',
            wpNonce: state.nonce,
            dept: state.dept,
            multiDept: state.multi_dept,
        }

        const formData = new FormData()

        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value)
        }

        const {subdepts, faculty} = await axios.post(url, formData)
            .then(response => response.data)

        dispatch('departments/setDepts', subdepts)
        dispatch('faculty/setAllFaculty', faculty)
    },
}