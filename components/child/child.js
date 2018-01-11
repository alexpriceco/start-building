import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from '../base.scss'

export class Child extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      // stuff goes here
    }
  }

  render () {
    return (
      <div>
        Child! {this.props.map((property, n) => {
          return <p key={n}>property</p>
        })}
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default Child
