import React, { Component } from 'react'
import moneyContext from './moneyContext'

export default class Contextchild extends Component {
  render() {
    return (
      <moneyContext.Consumer>
        {(value) => {
          return <div>我是contextChild组件 --- {value.money}</div>
        }}
      </moneyContext.Consumer>
    )
  }
}
