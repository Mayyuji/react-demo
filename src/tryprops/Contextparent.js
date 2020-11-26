import React, { Component } from 'react'
import Contextchild from './Contextchild'
export default class Contextparent extends Component {
  render() {
    return (
      <div>
        Contextparent---{this.props.money}
        <Contextchild />
      </div>
    )
  }
}
