import React, { Component } from 'react'

import Stylesheet from '../components/stylesheet.js'
import sheet from '../components/base.scss'

import Column from '../components/column/column.js'

// import FIREBASE_API_KEY from '../config/firebase-api-key.js'
// import * as firebase from 'firebase'
// require('firebase/firestore')
// if (!firebase.apps.length) {
//   console.log(
//     '%cCreating a new firebase instance...',
//     'color: grey; font-style: italic'
//   )
//
//   let config = {
//     apiKey: FIREBASE_API_KEY,
//     authDomain: 'start-building-n.firebaseapp.com',
//     projectId: 'start-building-n'
//   }
//
//   firebase.initializeApp(config)
// }

export class Board extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true,
      error: '',

      winnie: [],
      bob: [],
      thomas: [],
      george: []
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  storageAvailable (type) {
    /* global DOMException */
    let storage = window[type]

    try {
      let x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return e instanceof DOMException && (
        e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
      ) && storage.length !== 0
    }
  }

  updateLocalStore () {
    /* global localStorage */
    const data = JSON.stringify(this.state)
    localStorage.setItem('state', data)
  }

  componentDidMount () {
    const newState = JSON.parse(localStorage.getItem('state'))
    this.setState({
      ...newState,
      loading: false
    })
  }

  addCard (text, column) {
    let newColumn = this.state[column]
    newColumn.push(text)

    this.setState({
      [column]: newColumn
    }, this.updateLocalStore())
  }

  moveLeft (current, target, cardIndex) {
    console.debug('moveLeft', current, target, cardIndex)
    // splice card from existing column
    // push into new column
    let newCurrent = this.state[current]
    let cardData = newCurrent[cardIndex]
    newCurrent.splice(cardIndex, 1)

    let newTarget = this.state[target]
    newTarget.push(cardData)

    this.setState({
      [current]: newCurrent,
      [target]: newTarget
    }, this.updateLocalStore())
  }

  moveRight (current, target, cardIndex) {
    console.debug('moveRight', current, target, cardIndex)
    // splice card from existing column
    // push into new column
    let newCurrent = this.state[current]
    let cardData = newCurrent[cardIndex]
    newCurrent.splice(cardIndex, 1)

    let newTarget = this.state[target]
    newTarget.push(cardData)

    this.setState({
      [current]: newCurrent,
      [target]: newTarget
    }, this.updateLocalStore())
  }

  render () {
    if (this.state.loading) {
      return (
        <main>
          Just a second...
          <Stylesheet sheet={sheet} />
        </main>
      )
    } else if (this.state.error) {
      return (
        <main>
          <h1>That's bad. The following error occurred:</h1>
          <div className='error'>{this.state.error}</div>
          <Stylesheet sheet={sheet} />
        </main>
      )
    }

    return (
      <main>
        <Column
          addCard={(text) => this.addCard(text, 'winnie')}
          moveRight={(index) => {
            this.moveRight('winnie', 'bob', index)
          }}
          cards={this.state.winnie}
          name={'Winnie'}
        />

        <Column
          addCard={(text) => this.addCard(text, 'bob')}
          moveLeft={(index) => {
            this.moveLeft('bob', 'winnie', index)
          }}
          moveRight={(index) => {
            this.moveRight('bob', 'thomas', index)
          }}
          cards={this.state.bob}
          name={'Bob'}
        />

        <Column
          addCard={(text) => this.addCard(text, 'thomas')}
          moveLeft={(index) => {
            this.moveLeft('thomas', 'bob', index)
          }}
          moveRight={(index) => {
            this.moveRight('thomas', 'george', index)
          }}
          cards={this.state.thomas}
          name={'Thomas'}
        />

        <Column
          addCard={(text) => this.addCard(text, 'george')}
          moveLeft={(index) => {
            this.moveLeft('george', 'thomas', index)
          }}
          cards={this.state.george}
          name={'George'}
        />
        <Stylesheet sheet={sheet} />
      </main>
    )
  }
}

export default Board
