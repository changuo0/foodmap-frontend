import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Survey from './components/Survey';
import Navigation from './components/Navigation';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class App extends Component{
  render() {
    return(
        <Router>
            <div>
                <Navigation/>
                <Switch>
                    <Route path = "/" component = {Home} exact/>
                    <Route path = "/Survey" component = {Survey}/>
                </Switch>
            </div>
        </Router>

    );

  }

}

export default App;
