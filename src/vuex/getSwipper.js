import axios from '@/utils/axios'
const state = {
  msg: '111'
}

const actions = {
  'A:getSwipper/getSwipperList' ({ commit }, params = {}) {
    return axios.axiosP(
      params.url,
      params.data
    )
  }
}

const mutations = {

}

export default {
  state,
  actions,
  mutations
}
