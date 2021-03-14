import React, {Component} from 'react'
import DiscoverTrack from "./discovertrack"

class MagicSquare extends Component {
    render() {
      return (
        <div>
             <a href="#" className="shuffle-button w-button"><strong className="button-text">Shuffle </strong><span className="text-span-5"><strong className="button-emoji">🥘</strong></span></a>
             <div className="magic-grid">
               {this.props.tracks.map((track)=>{
                 return <DiscoverTrack track={track}/>
               })}
             </div>
        </div>

        
      )
    }
}

export default MagicSquare
