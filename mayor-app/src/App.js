import { Component } from 'react';
import './App.css';

class App extends Component{
  render() {
    return(
      <div className="Container">
        <nav className="NavBar">
            <a className="NavBarLink" href={"INSERT LINK LATER"}>Nashville Food</a>
            <div className="NavBar-Expanded">
              <input type="text"/>
            </div>
            
        </nav>
        <h1 className="display-3">Find Food</h1>
        <p>Take this survey to find food near you</p>
        <button className="ButtonPrimary" On>Take Survey »</button>
      </div>

    );

  }

}

export default App;
