import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './child.scss'

export class Child extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      // stuff goes here
    }
  }

  render () {
    const { data } = this.props
    console.debug('Data is ', data)
    return (
      <div>
        { Object.keys(data).map((key, n) => {
          return (
            <p className='row' key={n}>
              <span>{key}</span>: <span>{data[key]}</span>
            </p>
          )
        })}
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default Child
