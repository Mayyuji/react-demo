import React, { Component } from 'react'
import actionCretors from '../../store/todolist/actionCretors'
export default class Toinput extends Component {
  addTodo = (e) => {
    if (e.keyCode === 13 && !!e.target.value) {
      //更改redux的状态list
      actionCretors.addNewTodo(e.target.value)
      e.target.value = ''
    }
  }
  render() {
    return <input type="text" placeholder="请输入" onKeyUp={this.addTodo} />
  }
}
