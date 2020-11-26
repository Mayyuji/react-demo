import { combineReducers } from 'redux'
import todolist from './todolist/reducer'
//  合并分支 reducer
const reducer = combineReducers({
  todolist,
})
export default reducer
