import React, { Component } from 'react'

class RegComponent extends Component {
  render() {
    console.log('********Regular Component *********')
    return (
      <div>
        Regular componet {this.props.name}
      </div>
    )
  }
}

export default RegComponent
