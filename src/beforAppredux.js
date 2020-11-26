import logo from './logo.svg'
import React, { Component } from 'react'
// import Form from './Form'
// import Father from './组件通信/father'
// import Proxy from './Proxy'
// import One from './hook/one'
// import One from './tryprops/One'
import Contextparent from './tryprops/Contextparent'
import moneyContext from './tryprops/moneyContext'
moneyContext.displayName = 'moneyContext'
export default class App extends Component {
  componentDidMount() {}
  state = {
    money: 100,
  }
  render() {
    return (
      <moneyContext.Provider
        value={{
          money: this.state.money,
        }}
      >
        <img src={logo} alt="" style={{ width: '100px', height: '100px' }} />
        {/* <Form /> 
         <hr /> 
         <Father />
        <Proxy /> */
        /* <One name={1} /> */}
        <Contextparent money={this.state.money} />
      </moneyContext.Provider>
    )
  }
}
