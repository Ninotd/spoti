import logo from '../logo.svg';
import './App.scss';
import Artist from "./artist"
import ArtistList from "./artistlist"
import Welcome from "./welcome"
import SongList from "./songlist"
import MagicSquare from "./magicsquare"
import React, {Component} from 'react'




class App extends Component {
  constructor() {
    super();
    this.state = { 
      name : "",
      favArtists: [],
      recommendedSongs: [],

    }
  }

  render() {
    return (
      <div className="app">
        { this.state.name ?
        <div>
            <div className="welcome">
              <Welcome name = {this.state.name}/>
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
        :
        <div>
          <div class="login">
            <button onClick={()=> {window.location.href.includes("localhost") ? window.location="http://localhost:8888/login" : window.location="https://spotify-backend-nino.herokuapp.com/login"}} class="login-button w-inline-block"></button>
          </div>
        </div>
      }
      </div>
      );
  } 
  
  componentDidMount() {
    if (window.location.search.split("=")[1]) {
      let token = window.location.search.split("=")[1];
      
      // Get the name
      fetch("https://api.spotify.com/v1/me", 
      {headers: {"Authorization": 'Bearer ' + token}})
      .then(response => response.json()).then(data => this.setState({name: data.display_name.split(" ")[0]}))

      //Get the tracks 
      fetch("https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",{headers: {"Authorization": 'Bearer ' + token}})
      .then(response => response.json()).then(data => console.log(data))

      //Get the artists
      fetch("https://api.spotify.com/v1/me/top/artists?limit=4&time_range=short_term",{headers: {"Authorization": 'Bearer ' + token}})
      .then(response => response.json()).then(data => console.log(data.items[0].images[2].url))
    }
  }

  
}

export default App;
