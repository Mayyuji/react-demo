import React, { Component } from 'react'
import eventHub from './EventHub'
export default class son01 extends Component {
  constructor() {
    super()
    this.state = {
      msgb: '',
    }
  }
  componentDidMount() {
    eventHub.on('sendb', (num) => {
      this.setState({
        msgb: num,
      })
    })
  }

  render() {
    return (
      <div style={{ border: '1px solid red' }}>
        <h4>sona</h4>
        <p>兄弟msg:{this.state.msgb}</p>
        <p>父类msg:{this.props.msg}</p>
      </div>
    )
  }
}
