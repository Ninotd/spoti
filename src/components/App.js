import logo from '../logo.svg';
import './App.scss';
import Artist from "./artist"
import ArtistList from "./artistlist"
import Welcome from "./welcome"
import React, {Component} from 'react'


const name = "Nino"

class App extends Component {

  render() {
    return (
      <div className="full">
          <div className="welcome">
            <Welcome name = {name}/>
          </div>
          <div className="analysis">
            <div className="you">
              <div>
                <h1> Favorites 💿 </h1>
                <ArtistList/>
              </div>
              <h3> Mes gars sûrs 💪🏻 </h3>
              
              <h3> En clebou 🤯 </h3>
            </div>
            <div className="le-club">
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
