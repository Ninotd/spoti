import React, {Component} from 'react'
import Artist from "./artist"

class ArtistList extends Component {
    render() {
      return (
        <div className="artists-list">
          {
            this.props.artists.map((artist) => {
              return (
                <Artist info={artist} key={artist.name}/>
              )
            })
          }
        </div>
      )
      
    }
}

export default ArtistList
