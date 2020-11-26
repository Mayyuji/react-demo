import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class One extends Component {
  static defaultProps = {
    name: '英国大理石',
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

One.propTypes = {
  name: PropTypes.string,
}
