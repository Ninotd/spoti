import React, {Component} from 'react'

class Artist extends Component {
    render() {
      return (
        <div className="discover-track">
            <p>{this.props.info.name}</p>
        </div>        
      )
    }
}

export default Artist