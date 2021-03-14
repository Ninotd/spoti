import React, {Component} from 'react'

class Artist extends Component {
    render() {
      return (
       
            <div className="carre-artist" style={{backgroundImage: `url(${this.props.artist.image})`}}>
               <div className="artist"  >
               </div>     
            </div>
           
      )
    }
}

export default Artist