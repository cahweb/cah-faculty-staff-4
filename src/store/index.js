/* eslint no-undef: 1 */

import Vue from 'vue'
import Vuex from 'vuex'

// global actions, getters, and mutations
import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'

// modules
import {departments} from './modules/departments'
import {faculty} from './modules/faculty'

Vue.use(Vuex)

const state = {
  dept: 0,
  multi_dept: false,
  has_advising: true,
  img_shape: '',
  format: '',
  include_interests: true,
  filterable: true,
  vertical: false,
  prog_title_only: false,
  nonce: null,
  baseUrl: wpVars.baseUrl,
  ajaxUrl: wpVars.ajaxUrl,
  pluginDirURI: wpVars.pluginDirURI,
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    departments,
    faculty,
  }
})
