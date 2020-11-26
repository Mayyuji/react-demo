import logo from './logo.svg'
import React, { Component } from 'react'
import Todolist from './components/todolist'
export default class App extends Component {
  render() {
    return (
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ width: '100px', height: '100px' }}
        />
        <Todolist />
      </div>
    )
  }
}
