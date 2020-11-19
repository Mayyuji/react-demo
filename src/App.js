import logo from './logo.svg'
import React, { Component } from 'react'
import Form from './Form'
import Father from './组件通信/father'
import Proxy from './Proxy'
export default class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="" style={{ width: '100px', height: '100px' }} />
        <Form />
        <hr />
        <Father />
        <Proxy />
      </div>
    )
  }
}
