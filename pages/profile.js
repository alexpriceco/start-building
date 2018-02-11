import { Component } from 'react'
import Link from 'next/link'

import Stylesheet from '../components/stylesheet.js'
import sheet from '../components/base.scss'

export class Profile extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: 'Alexander Hamilton'
    }
  }

  render () {
    return (
      <main>
        <h1>{this.state.name}'s Profile</h1>

        <Link href='/'>
          <div className='button'>Back to index</div>
        </Link>

        <Stylesheet sheet={sheet} />
      </main>
    )
  }
}

export default Profile
