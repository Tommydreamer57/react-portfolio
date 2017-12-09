import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import NavButtons from './components/buttons';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <content>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </content>
        <NavButtons />
        <Navbar id="Navbar" scrollTo={this.scrollTo} section={this.state.section} />
      </div>
    );
  }
}

export default App;
