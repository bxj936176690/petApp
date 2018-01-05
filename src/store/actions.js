import {requestMain} from '../api'
import {REQUESTMAIN} from './mutition-type'
export default {
  async requestMain({commit}){
    const main = await requestMain()
    commit(REQUESTMAIN, {main})
  }
}
