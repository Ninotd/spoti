import React, {Component} from 'react'

class Track extends Component {
    render() {
      return (
        <div className="track">
          <div className="track-picture" style={{backgroundImage: `url(${this.props.track.image})`}}></div>
          <div className="artist-info">
            <div className="track-title-artist">
              {this.props.track.name}
            </div>
            <div className="artist-name">
              {this.props.track.artist}
            </div>
          </div>
        </div>

        
      )
    }
}

export default Track