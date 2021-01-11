import { Component } from 'react';
import './App.css';
import wic from './images/wic.png';
import snap from './images/snap.jpg';
import nutrition from './images/nutrition.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    openUrl = (url) =>{
        window.open(url);
    }

  render() {
    return(
      <div>
        
         {/*Navbar*/}
        <nav className="NavBar">
            <a className="NavBarLink" href={"INSERT LINK LATER"}>Nashville Food</a>
            <div className="NavBar-Expanded">
              <a className="NavBarItem" href={"INSERT LINK LATER"}>About</a>
              <Dropdown >
                <Dropdown.Toggle variant="NavBarItem-Dropdown">
                  Get Help
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <a className="NavBarItem-Dropdown" href={"INSERT LINK LATER"}>Get Involved</a>
              <button className="SearchBarButton">Search</button>
              <input className="SearchBar" type="text" placeholder="Search"/>
            </div>
        </nav>

          {/*First Main Section  */}
        <div className="Container">
          <h1 className="display-3">Find Food</h1>
          <p>Take this survey to find food near you</p>
          <button className="ButtonPrimary" On>Take Survey »</button>
        </div>

          {/*Second Main Section */}
        <div className = "col-container-2">
          <div className="row">
            <div className = "col-2">
              <h2>Find Food</h2>
              <p>An alternative placement for the find food survey</p>
              <button className="ButtonSecondary" On onClick={() => this.openUrl("INSERT LINK")}>Take Survey »</button>
            </div>
            <div className = "col-2">
              <h2>Assistance Programs</h2>
              <p>Getting help applying for assistance programs</p>
              <button className="ButtonSecondary" On onClick={() => this.openUrl("INSERT LINK")}>Get Help »</button>
           </div>
            <div className = "col-2">
              <h2>Contribute to Your Community</h2>
             <p>There are many ways to help our neighbors in need. Whether you're an organization or an individual, you can make a difference.</p>
             <button className="ButtonSecondary" On onClick={() => this.openUrl("INSERT LINK")}>Get Involved »</button>
            </div>
          </div>
        </div>

          {/*Third Main section*/}
          <div className = "subDisplay">
              Nashville Food Pantry Calendar
              <div className = "row">
                  <h4>Monday</h4>
                  <h4>Tuesday</h4>
                  <h4>Wednesday</h4>
                  <h4>Thursday</h4>
                  <h4>Friday</h4>
                  <h4>Saturday</h4>
                  <h4>Sunday</h4>
              </div>
              <h2>IMPORT CALENDAR</h2>
              <button className="ButtonPrimary" On onClick={() => this.openUrl("INSERT LINK")}>Get Calendar »</button>
          </div>
        
          {/* Assistance Programs section */}
        <div className = "subDisplay">
            Assistance Programs
            <h2 className = "col-container-2">
                <h3>
                    SNAP
                    <img src={snap} />
                    <button className="ButtonPrimary" On onClick={() => this.openUrl("https://faonlineapp.dhs.tn.gov/")}>Apply Here »</button>
                </h3>

                <h3>
                    WIC
                    <img src={wic}/>
                    <button className="ButtonPrimary" On onClick={() => this.openUrl("https://www.tn.gov/health/health-program-areas/fhw/wic.html")}>Learn How to Apply »</button>
                </h3>

                <h3>
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
