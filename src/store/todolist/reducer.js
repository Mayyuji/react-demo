/**
 * 是一个纯函数 接受action和 之前的状态
 * 返回一个新的state
 * 只要有固定的输入就有固定的输出
 * 不能对之前的状态进行修改,只能进行同步操作
 */
import { ADD_NEW_RODO, CHANGE_NEW_TODO, DELETE_TODO } from './actionType'
let state = {
  list: [
    { id: 1, title: '你看这个卵蛋', isdone: true },
    { id: 2, title: '他是不是很软', isdone: false },
    { id: 3, title: '小伙子你不讲武德你不懂', isdone: false },
  ],
}
const reducer = (prevState = state, action) => {
  let newState = { ...prevState }
  //
  const handler = {
    getId(list) {
      list = list.slice()
      if (list.length === 0) return 1
      return (
        list.sort((a, b) => {
          return b.id - a.id
        })[0].id + 1
      )
    },
    change(list, id) {
      list = list.slice()
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
          list[i].isdone = !list[i].isdone
        }
      }
      console.log(list)
      return list
    },
    delete(list, id) {
      return list.filter((item) => {
        return item.id === id ? false : true
      })
    },
  }

  switch (action.type) {
    case ADD_NEW_RODO:
      newState.list.push({
        id: handler.getId(newState.list),
        title: action.title,
        isdone: false,
      })
      console.log(newState)
      break
    case CHANGE_NEW_TODO:
      newState.list = handler.change(newState.list, action.id)
      break
    case DELETE_TODO:
      newState.list = handler.delete(newState.list, action.id)
      break
    default:
      break
  }

  return newState
}
export default reducer
