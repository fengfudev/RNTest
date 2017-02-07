import {observable} from 'mobx'

let index = 0

class AppStore {
  @observable name = 'test'
}


export default new AppStore()