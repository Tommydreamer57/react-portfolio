import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Menu from './components/Menu/Menu';
import Scrollbar from './components/Scrollbar/Scrollbar';
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
      current: 1,
      menu: false,
      scroll: 0,
    }
  }

  onScroll = () => {
    this.setState({
      scroll: ++this.state.scroll
    })
  }

  setRoute = current => {
    if (current !== this.state.current) {
      this.setState({
        current
      })
    }
  }

  toggleMenu = () => {
    console.log(this.state.menu)
    let menu = !this.state.menu
    this.setState({
      menu
    })
  }

  render() {
    return (
      <div className="App" id="App" onScroll={this.onScroll}>
        <content>
          <Switch>
            <Route
              exact path="/"
              render={() => {
                return <Landing setRoute={() => this.setRoute(1)} previous={this.state.route} />
              }}
            />
            <Route
              path="/about"
              render={() => {
                return <About setRoute={() => this.setRoute(2)} previous={this.state.route} />
              }}
            />
            <Route
              path="/skills"
              render={() => {
                return <Skills setRoute={() => this.setRoute(3)} previous={this.state.route} />
              }}
            />
            <Route
              path="/projects"
              render={() => {
                return <Projects setRoute={() => this.setRoute(4)} previous={this.state.route} />
              }}
            />
            <Route
              path="/contact"
              render={() => {
                return <Contact setRoute={() => this.setRoute(5)} previous={this.state.route} />
              }}
            />
          </Switch>
        </content>
        <NavButtons
          current={this.state.current}
          open={this.state.menu}
          toggleMenu={this.toggleMenu} />
        <Menu
          section={this.state.routes[this.state.current]}
          open={this.state.menu}
          toggleMenu={this.toggleMenu}
        />
        <Scrollbar scroll={this.state.scroll} />
        {/*
        <Navbar id="Navbar" scrollTo={this.scrollTo} section={this.state.section} /> */}
        <div id="bottom" />
      </div>
    );
  }
}

export default App;
