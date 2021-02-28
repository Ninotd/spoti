import React, {Component} from 'react'

class Welcome extends Component {
    render() {
      return (
        <h1>Hello <span> {this.props.name} </span> 👋 </h1>
      )
    }
}

export default Welcome
