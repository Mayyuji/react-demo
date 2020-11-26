import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer) // 创建store的时候需要reducer辅助才能创建成功
export default store
