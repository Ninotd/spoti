import logo from '../logo.svg';
import './App.scss';
import Artist from "./artist"
import ArtistList from "./artistlist"
import Welcome from "./welcome"
import SongList from "./songlist"
import MagicSquare from "./magicsquare"
import React, {Component} from 'react'


const name = "Nino"

class App extends Component {

  render() {
    return (
      <div>
          <div className="welcome">
            <Welcome name = {name}/>
          </div>
          <div className="analysis">
            <div className="third">
              <div>
                <h3 className="title"> Mes gars <span className="party_span"> sûrs </span></h3>
                <ArtistList/>
              </div>
              <div>
                <h3 className="title">En <span className="text-span-3">boucle</span> 🔄</h3>
                <SongList/>
              </div>
            </div>
            <div className="third">
              
            </div>
            <div className="third">
              <h3 className="title">Magic<span className="text-span-4">square</span></h3>
              <MagicSquare/>
            </div>

          </div>
      </div>
      );
  } 
  
  componentDidMount() {
    let token = window.location.search.split("=")[1];
    console.log(token)

    fetch ("https://api.spotify.com/v1/me/top/tracks", 
    {headers: {"Authorization": 'Bearer ' + token}})
    .then(response => response.json()).then(data => console.log(data))
  }

}

export default App;
