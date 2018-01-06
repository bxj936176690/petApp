import {requestMain, requestMainOther} from '../api'
import {REQUESTMAIN, REQUESTMAINOTHER} from './mutition-type'
export default {
  async requestMain({commit}, cd){
    const main = await requestMain()
    commit(REQUESTMAIN, {main})
    cd && cd()
  },

  async requestMainOther({commit}, cd){
    const mainOther = await requestMainOther()
    commit(REQUESTMAINOTHER, {mainOther})
    cd && cd()
  },
}
