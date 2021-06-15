import _ from 'underscore'
import axios from 'axios'

export const actions = {
    checkSafari({commit}) {

        let isApple = false

        // Check for Safari
        if (/constructor/i.test(window.HTMLElement) || (p => p.toString() === '[object SafariRemoteNotification]')(!window['safari'])) {
            isApple = true
        }

        // Check if we're on a mobile device
        const isMobile = /Mobi/.test(navigator.userAgent)

        // If we are, see if we're on iOS
        if (isMobile && (/iPhone;/.test(navigator.userAgent) || /iPad;/.test(navigator.userAgent))) {
            isApple = true
        }

        commit('updateIsApple', isApple)
    },

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

    async setIsLoaded({commit}, isLoaded) {
        commit('updateIsLoaded', isLoaded)
    },

    async changeFormat({commit, dispatch}, format) {
        let tiered = null

        switch (format) {
            case 'picture':
                tiered = true
                break;
            case 'a-z':
                tiered = false
                break
        }

        if (tiered !== null) {
            commit('setOptions', {format, tiered})
            dispatch('faculty/sortDisplayList')
        }
    },
}