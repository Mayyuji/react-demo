import React, { Component } from 'react'
import Todocontent from './Todocontent'
import Toinput from './Toinput'
import Statistics from './Statistics'
export default class Todolist extends Component {
  render() {
    return (
      <div>
        todolist
        <Toinput />
        <Todocontent />
        <Statistics />
      </div>
    )
  }
}
