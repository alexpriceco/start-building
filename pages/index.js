import React, { Component } from 'react'

import Style from '../components/general/style'
import sheet from '../components/base.scss'

import Child from '../components/child'

import FIREBASE_API_KEY from '../config/firebase-api-key.js'
import * as firebase from 'firebase'
if (!firebase.apps.length) {
  console.log(
    '%cCreating a new firebase instance...',
    'color: grey; font-style: italic'
  )

  let config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: 'start-building-n.firebaseapp.com',
    projectId: 'start-building-n'
  }

  firebase.initializeApp(config)
}

export class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <main>
          Just a second...
          <Style sheet={sheet} />
        </main>
      )
    }
    return (
      <main>
        <h1>App title</h1>

        <Child />

        <Style sheet={sheet} />
      </main>
    )
  }
}

export default Index
