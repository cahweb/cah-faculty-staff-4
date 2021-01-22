import Vue from 'vue'

export const mutations = {
    setNonce(state, nonce) {
        Vue.set(state, 'nonce', nonce);
    },
    setOptions(state, options) {
        for (const [key, value] of Object.entries(options)) {
            Vue.set(state, key, value)
        }
    },
}