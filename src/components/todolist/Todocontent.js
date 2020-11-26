import React, { Component } from 'react'
import store from '../../store'
import actionCretors from '../../store/todolist/actionCretors'
const LiItem = (props) => {
  const handleChange = (e) => {
    actionCretors.changeNewTodo(props.item.id)
  }
  const delitem = (e) => {
    actionCretors.deleteTodo(props.item.id)
  }
  return (
    <li
      style={{
        color: props.item.isdone ? '#aaa' : '',
        textDecoration: props.item.isdone ? 'line-through' : '',
      }}
    >
      <input
        type="checkbox"
        onChange={handleChange}
        checked={props.item.isdone}
      />
      {props.item.title}
      <button onClick={delitem}>删除</button>
    </li>
  )
}
export default class Todocontent extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }
  steList = () => {
    this.setState({
      list: store.getState().todolist.list,
    })
  }
  componentDidMount() {
    this.steList()
    // 当 redux 状态改变时,回调函数会触发执行
    store.subscribe(() => {
      this.steList()
    })
  }
  mapList = () => {
    return this.state.list.map((item) => {
      return <LiItem key={item.id} item={item} />
    })
  }
  render() {
    return <ul>{this.mapList()}</ul>
  }
}
