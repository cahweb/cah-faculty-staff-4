import Vue from 'vue'

export const mutations = {
    updateIsApple(state, isApple) {
        Vue.set(state, 'isApple', isApple)
    },
    setNonce(state, nonce) {
        Vue.set(state, 'nonce', nonce);
    },
    setOptions(state, options) {
        for (const [key, value] of Object.entries(options)) {
            Vue.set(state, key, value)
        }
    },
    updateIsLoaded(state, isLoaded) {
        Vue.set(state, 'isLoaded', isLoaded)
    }
}