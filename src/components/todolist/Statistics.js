import React, { Component } from 'react'
import store from '../../store'
export default class Statistics extends Component {
  constructor() {
    super()
    this.state = {
      list: store.getState().todolist.list,
    }
  }
  componentDidMount() {
    //订阅 redux 状态变化
    // 当 redux 状态改变时,回调函数会触发执行
    store.subscribe(() => {
      this.setState({
        list: store.getState().todolist.list,
      })
    })
  }
  compute = () => {
    let { list } = this.state
    let isdone = list.filter((item) => {
      return item.isdone === true
    }).length
    return [list.length, isdone]
  }
  render() {
    let info = this.compute()
    console.log(info)
    return (
      <div>
        总共 {info[0]} 已完成 {info[1]} 未完成 {info[0] - info[1]}
      </div>
    )
  }
}
