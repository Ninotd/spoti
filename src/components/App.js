import logo from '../logo.svg';
import './App.scss';
import Artist from "./artist"
import ArtistList from "./artistlist"
import Welcome from "./welcome"

const name = "Nino"

function App() {
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

export default App;
