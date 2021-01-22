import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'

const state = {
    allFaculty: {},
    displayList: [],
}

const namespaced = true

export const faculty = {
    state,
    namespaced,
    actions,
    getters,
    mutations,
}