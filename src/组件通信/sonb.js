import React, { Component } from 'react'
import eventHub from './EventHub'
export default class son02 extends Component {
  send = (e) => {
    this.props.setList(parseInt(Math.random() * 10))
  }
  sendbrather() {
    eventHub.trigger('sendb', parseInt(Math.random() * 10))
  }
  render() {
    return (
      <div style={{ border: '1px solid red' }}>
        <h4>sonb</h4>
        给兄弟发送:<button onClick={this.sendbrather}>发送</button>
        <br />
        给父类发送:<button onClick={this.send}>发送</button>
      </div>
    )
  }
}
