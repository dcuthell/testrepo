import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Thingy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navitems: [],
      socialitems: []
    }
    this.parseJSON = this.parseJSON.bind(this)
  }

  parseJSON() {
    let something = this.props.children
    let thing
    let arraything = []
    for (thing of Object.keys(something)) {
      if (thing === 'name') {
        console.log('name')
        arraything = [
          ...arraything,
          <p>gofuckyouself</p>
        ]
      }
      if (thing === 'age') {
        console.log('age')
        arraything = [
          ...arraything,
          <p>gofuckyouself</p>
        ]
      }
      if (thing === 'lifestyle') {
        arraything = [
          ...arraything,
          <p>gofuckyouself</p>
        ]
      }
      this.setState({
        socialitems: arraything
      })
      console.log('Key is: ' + thing + ' and val is: ' + something[thing])
    }
  }

  componentWillMount() {
    this.parseJSON()
  }

  render() {
    console.log(this.state)
    return (
      this.state.socialitems
    )
  }
}

Thingy.defaultProps = {

}

Thingy.propTypes = {
  children: PropTypes.object
}

export default Thingy
