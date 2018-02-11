import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './child.scss'

export class Child extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      description: this.props.description
    }
  }

  render () {
    const { description } = this.state

    return (
      <div>
        <input
          className='styled'
          value={description}
          onChange={(event) => {
            this.setState({
              description: event.target.value
            })
          }}
        />

        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default Child
