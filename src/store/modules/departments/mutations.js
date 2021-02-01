import Vue from 'vue'

export const mutations = {
    updateDepts(state, depts) {
        Vue.set(state, 'deptList', depts)
    },
    updateSelected(state, dept) {
        Vue.set(state, 'selected', dept)
    },
    updateIsSmallScreen(state, isSmallScreen) {
        Vue.set(state, 'isSmallScreen', isSmallScreen)
    }
}