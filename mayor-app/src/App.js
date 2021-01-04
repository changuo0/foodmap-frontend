import { Component } from 'react';
import './App.css';
import wic from './images/wic.png';
import snap from './images/snap.jpg';
import nutrition from './images/nutrition.png';

class App extends Component{
    openUrl = (url) =>{
        window.open(url);
    }

  render() {
    return(
      <div className="Container">
        <nav className="NavBar">
            <a className="NavBarLink" href={"INSERT LINK LATER"}>Nashville Food</a>
            <div className="NavBar-Expanded">
              <input type="text"/>
            </div>
        </nav>

          {/*First Main Section  */}
        <h1 className="display-3">Find Food</h1>
        <p>Take this survey to find food near you</p>
        <button className="ButtonPrimary" On>Take Survey »</button>

          {/* Assistance Programs section */}
        <div className = "subDisplay">
            Assistance Programs
            <h2 className = "col-container">
                <div className = "col">
                    SNAP
                    <img src={snap} />
                    <button className="ButtonPrimary" On onClick={() => this.openUrl("https://faonlineapp.dhs.tn.gov/")}>Apply Here »</button>
                </div>

                <h3 className= "col">
                    WIC
                    <img src={wic}/>
                    <button className="ButtonPrimary" On onClick={() => this.openUrl("https://www.tn.gov/health/health-program-areas/fhw/wic.html")}>Learn How to Apply »</button>
                </h3>

                <h3 className = "col">
                    Nutrition Info
                    <img src={nutrition}/>
                    <button className="ButtonPrimary" On>Learn More »</button>
                </h3>
            </h2>

        </div>

      </div>


    );

  }

}

export default App;
