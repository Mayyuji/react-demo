import React, { Component } from 'react'

export default class one extends Component {
  constructor() {
    super()
    this.state = {
      n: 0,
    }
    this.clickme = this.clickme.bind(this)
  }
  clickme() {
    console.log(this)
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        One
        <button onClick={this.clickme}>点击</button>
      </div>
    )
  }
}
