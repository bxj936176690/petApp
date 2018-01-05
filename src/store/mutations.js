import {REQUESTMAIN} from './mutition-type'

export default {
  [REQUESTMAIN](state, {main}){
    state.main = main
  }
}
