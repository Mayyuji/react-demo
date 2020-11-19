import React, { Component } from 'react'
import Sona from './sona'
import Sonb from './sonb'
export default class father extends Component {
  constructor() {
    super()
    this.state = {
      msg: '父传子信息',
      sonbmsg: '',
    }
  }
  setList = (title) => {
    this.setState({
      sonbmsg: title,
    })
  }
  render() {
    return (
      <div>
        <h2>Father</h2>
        <p>子类消息:{this.state.sonbmsg}</p>
        <Sona msg={this.state.msg} />
        <Sonb setList={this.setList} />
      </div>
    )
  }
}
