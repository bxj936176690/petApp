import {REQUESTMAIN, REQUESTMAINOTHER} from './mutition-type'

export default {
  [REQUESTMAIN](state, {main}){
    state.main = main
  },
  [REQUESTMAINOTHER](state, {mainOther}){
    state.mainOther = mainOther
  }
}
