import React, { Component } from 'react';
import './Styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Survey from './components/Survey';
import Results from './components/Results';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class App extends Component{

  //Added a constructor and an event listener to check for screen size so that navBar is properly adjusted
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const {windowWidth} = this.state;
    return(
        <Router>
            <div>
                <Navigation windowWidth={windowWidth}/>
                <Switch>
                    <Route path = "/" component = {Home} exact/>
                    <Route path = "/Survey" component = {Survey}/>
                    <Route path = "/Results" component = {Results}/>
                    <Route path = "/Login" component = {Login}/>
                    <Route path = "/SignUp" component = {SignUp}/>
                </Switch>
            </div>
        </Router>

    );

  }



}

export default App;
