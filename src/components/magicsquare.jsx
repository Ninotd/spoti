import React, {Component} from 'react'
import DiscoverTrack from "./discovertrack"

class MagicSquare extends Component {
    render() {
      return (
        <div>
             <a href="#" class="shuffle-button w-button"><strong class="button-text">Shuffle </strong><span class="text-span-5"><strong class="button-emoji">🥘</strong></span></a>
             <div className="magic-grid">
               <DiscoverTrack/>
               <DiscoverTrack/>
               <DiscoverTrack/>
               <DiscoverTrack/>
             </div>
        </div>

        
      )
    }
}

export default MagicSquare
