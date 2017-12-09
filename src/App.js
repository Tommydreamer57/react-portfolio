import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import NavButtons from './components/buttons/buttons';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      routes: [
        "",
        "/",
        "/about",
        "/skills",
        "/projects",
        "/contact",
        ""
      ],
      current: 1
    }
  }

  setRoute = current => {
    if (current !== this.state.current) {
      this.setState({
        current
      })
    }
  }

  render() {
    return (
      <div className="App">
        <content>
          <Switch>
            <Route exact path="/" render={() => {
              this.setRoute(1)
              return <Landing />
            }}
              />
            <Route path="/about" render={() => {
              this.setRoute(2)
              return <About />
            }}
              />
            <Route path="/skills" render={() => {
              this.setRoute(3)
              return <Skills />
            }}
              />
            <Route path="/projects" render={() => {
              this.setRoute(4)
              return <Projects />
            }}
              />
            <Route path="/contact" render={() => {
              this.setRoute(5)
              return <Contact />
            }}
              />
          </Switch>
        </content>
        <NavButtons current={this.state.current} />
        {/*
        <Navbar id="Navbar" scrollTo={this.scrollTo} section={this.state.section} /> */}
      </div>
    );
  }
}

export default App;
