import { Component } from 'react';
import './App.css';

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
        <div className = "Container">
            <h1 className = "SubDisplay">
                Assistance Programs
            </h1>

            {/*maybe need to make url variables */}
            <button className="ButtonPrimary" On onClick={() => this.openUrl("https://faonlineapp.dhs.tn.gov/")}>Apply Here »</button>

            <button className="ButtonPrimary" On onClick={() => this.openUrl("https://www.tn.gov/health/health-program-areas/fhw/wic.html")}>Learn How to Apply »</button>

            <button className="ButtonPrimary" On>Learn More »</button>

        </div>

      </div>


    );

  }

}

export default App;
