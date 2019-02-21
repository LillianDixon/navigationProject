import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Counter from "./counter";
import NavBar from "./navigation/nav-bar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavBar />

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            <h1>Cool Resturant</h1>
            <h2>Good food</h2>
            
            <hr />

            <Counter />
          </div>
        </Router>
      </div>
    );
  }
}
