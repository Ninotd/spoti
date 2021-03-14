import React, {Component} from 'react'
import Artist from "./artist"

class ArtistList extends Component {
    render() {
      return (
        <div className="w-layout-grid grid-artist">
          {
            this.props.artists.map((artist) => {
              return (
                <Artist artist={artist} key={artist.name}/>
              )
            })
          }
        </div>
      )
      
    }
}

export default ArtistList
