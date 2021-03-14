import logo from '../logo.svg';
import './App.scss';

import ArtistList from "./artistlist"
import Welcome from "./welcome"
import SongList from "./songlist"
import MagicSquare from "./magicsquare"
import React, {Component} from 'react'


const playAudio = (url) => {
  var a = new Audio(url);
  a.play();
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      name : "",
      favArtists: [],
      favTracks: [],
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
                  <ArtistList artists={this.state.favArtists}/>
                </div>
                <div>
                  <h3 className="title">En <span className="text-span-3">boucle</span> 🔄</h3>
                  <SongList tracks={this.state.favTracks.slice(0,5)} />
                </div>
              </div>
              <div className="third">
                
              </div>
              <div className="third">
                <h3 className="title">Magic<span className="text-span-4">square</span></h3>
                <MagicSquare tracks={this.state.favTracks}/>
              </div>
            </div>
        </div>
        :
        <div>
          <div className="login">
            <button onClick={()=> {window.location.href.includes("localhost") ? window.location="http://localhost:8888/login" : window.location="https://spotify-backend-nino.herokuapp.com/login"}} className="login-button w-inline-block"></button>
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
      fetch("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",{headers: {"Authorization": 'Bearer ' + token}})
      .then(response => response.json()).then(data => 
        this.setState({
            favTracks : data.items.map(
              (track) => {
                return {
                name: track.name,
                artist: track.artists[0].name, 
                image: track.album.images[0].url,
                preview_url: track.preview_url
                }
              }
            )
          }
        )
      )

      fetch("https://api.spotify.com/v1/me/tracks",{headers: {"Authorization": 'Bearer ' + token}})
      .then(response => response.json()).then(data=> console.log(data))

      //Get the artists
      fetch("https://api.spotify.com/v1/me/top/artists?limit=4&time_range=short_term",{headers: {"Authorization": 'Bearer ' + token}})
      .then(response => response.json()).then(data => this.setState({
        favArtists: 
        data.items.map((i) => {
          return {
            name: i.name,
            image: i.images[0].url
          }          
        })
      })    
     )
    }

  }

  
}

export default App;
