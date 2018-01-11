import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './child.scss'

export class Card extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      // stuff goes here
    }
  }

  render () {
    const { name, moveLeft, moveRight } = this.props

    return (
      <div className='card'>
        { this.props.canMoveLeft
          ? (
            <div className='moveLeft' onClick={() => moveLeft()}>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='15 18 9 12 15 6' />
              </svg>
            </div>
          ) : null }

        <span>{ name }</span>

        { this.props.canMoveRight
          ? (
            <div className='moveRight' onClick={() => moveRight()}>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='9 18 15 12 9 6' />
              </svg>
            </div>
          ) : null }

        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default Card
