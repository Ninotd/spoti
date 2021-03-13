import React, {Component} from 'react'
import Track from "./track"

class SongList extends Component {
    render() {
      return (
        <div>
          {
            this.props.tracks.map((track)=> {
              return <Track track ={track} key={track.image}/>
            })
          }
            
        </div>

        
      )
    }
}

export default SongList
