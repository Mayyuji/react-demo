import store from '../index'
import { ADD_NEW_RODO, CHANGE_NEW_TODO, DELETE_TODO } from './actionType'
const actionCretors = {
  addNewTodo(title) {
    let action = {
      type: ADD_NEW_RODO,
      title,
    }
    store.dispatch(action) // 直接将数据派发给 reducer
  },
  changeNewTodo(id) {
    let action = {
      type: CHANGE_NEW_TODO,
      id,
    }
    store.dispatch(action) // 直接将数据派发给 reducer
  },
  deleteTodo(id) {
    let action = {
      type: DELETE_TODO,
      id,
    }
    store.dispatch(action) // 直接将数据派发给 reducer
  },
}
export default actionCretors
