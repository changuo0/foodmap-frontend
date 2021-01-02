import { Component } from 'react';
import './App.css';

class App extends Component{
  render() {
    return(
      <div className="Container">
        <h1 className="display3">Find Food</h1>
        <p>Take this survey to find food near you</p>
        <button className="ButtonPrimary" On>Take Survey »</button>
      </div>

    );

  }

}

export default App;
