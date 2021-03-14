import React, {Component} from 'react'

class DiscoverTrack extends Component {
    render() {
      return (
        <div className="discover-track" style={{backgroundImage: `url(${this.props.track.image})`}}>
          <div className="track-content">
            
          </div>
        </div>
      )
    }
}

export default DiscoverTrack