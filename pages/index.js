import { Component } from 'react'
import Link from 'next/link'

import Stylesheet from '../components/stylesheet.js'
import sheet from '../components/base.scss'

import Child from '../components/child/child.js'

export class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      appName: 'Dummy',
      description: 'Some description of this dummy app.'
    }
  }

  render () {
    return (
      <main>
        <h1>{this.state.appName}</h1>

        <div
          className='button'
          onClick={() => {
            this.setState({ appName: 'New app name' })
          }}
        >Change app name</div>

        <Child
          description={this.state.description}
        />

        <Link href='/profile'>
          <div className='button'>Open profile</div>
        </Link>

        <Stylesheet sheet={sheet} />
      </main>
    )
  }
}

export default Index
