import React, {Component} from 'react'

class Track extends Component {
    render() {
      return (
        <div className="discover-track">
            <p>{this.props.track.name}</p>
        </div>

        
      )
    }
}

export default Track