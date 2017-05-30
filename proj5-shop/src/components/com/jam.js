export default class jam {
  // constructor () {
  // }
  locDbSet (name, obj) {
    if (!name || !obj) {
      console.log('name,obj：参数不能为空！')
      return
    }
    window.localStorage.setItem(name, JSON.stringify(obj))
  }
  locDbGet (name) {
    if (!name) {
      console.log('locDbGet(name): name参数不能为空！')
      return
    }
    // return JSON.parse(window.localStorage.getItem(name)) || {error: '不存在'}
    return JSON.parse(window.localStorage.getItem(name))
  }
}
