import React, { Component } from 'react'
import PropTypes from 'prop-types'
import

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
          <NavItem>
						<NavLink href={something[thing]} target="_blank" rel="noopener noreferrer"><i className="fab fa-" + thing /></NavLink>
					</NavItem>
        ]
      }
      if (thing === 'age') {
        console.log('age')
        arraything = [
          ...arraything,
          <NavItem>
            <NavLink href={something[thing]} target="_blank" rel="noopener noreferrer"><i className="fab fa-" + thing /></NavLink>
          </NavItem>
        ]
      }
      if (thing === 'lifestyle') {
        arraything = [
          ...arraything,
          <NavItem>
            <NavLink href={something[thing]} target="_blank" rel="noopener noreferrer"><i className="fab fa-" + thing /></NavLink>
          </NavItem>
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
