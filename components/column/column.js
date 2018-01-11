import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './child.scss'
import Card from '../card/card.js'

export class Column extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      // stuff goes here
    }
  }

  addCard () {
    // eslint-ignore-next-line
    const prompt = window.prompt('Test input')
    if (prompt) this.props.addCard(prompt)
  }

  render () {
    const { name, cards } = this.props
    return (
      <div className='column'>
        <header>
          <h1>{name}</h1>
        </header>
        <div>
          { cards.map((card, n) => {
            return (
              <Card
                canMoveLeft={this.props.moveLeft}
                canMoveRight={this.props.moveRight}
                moveLeft={() => this.props.moveLeft(n)}
                moveRight={() => this.props.moveRight(n)}
                name={card}
                key={`card--${n}`}
              />
            )
          })}
        </div>
        <Stylesheet sheet={sheet} />

        <div className='add-a-card' onClick={() => this.addCard()}>
          + Add a card
        </div>
      </div>
    )
  }
}

export default Column
