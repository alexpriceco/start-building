import React, { Component } from 'react'
import Stylesheet from '../components/stylesheet.js'
import sheet from '../components/base.scss'

export default class Error extends Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    return (
      <section>
        <Stylesheet sheet={sheet} />
        Error {this.props.statusCode}
      </section>
    )
  }
}
