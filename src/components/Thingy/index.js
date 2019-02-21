import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Thingy extends Component {
  constructor(props) {
    super(props)
    this.parseJSON = this.parseJSON.bind(this)
  }

  parseJSON() {
    let something = this.props.children
    let thing
    for (thing of Object.keys(something)) {
      console.log(thing)
    }
  }
  render() {
    this.parseJSON()
    return (
      <p>Balls</p>
    )
  }
}

Thingy.defaultProps = {

}

Thingy.propTypes = {
  children: PropTypes.node
}

export default Thingy
