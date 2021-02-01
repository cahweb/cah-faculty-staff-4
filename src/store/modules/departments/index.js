import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'

const state = {
    selected: null,
    deptList: [],
    isSmallScreen: false,
}

const namespaced = true;

export const departments = {
    state,
    namespaced,
    actions,
    getters,
    mutations,
}