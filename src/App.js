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
        // "/about",
        "/skills",
        "/projects",
        "/contact",
        ""
      ],
      current: 1,
      menu: false,
      scroll: 0,
      // styles
      previous: {
        left: "calc(-100vw + 150px)"
      },
      selected: {
        left: 0
      },
      next: {
        left: "calc(100vw - 150px)"
      }
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
    let { previous, selected, next } = this.state
    return (
      <div className="App" id="App" onScroll={this.onScroll}>
        <content>
          <About
            style={previous}
          />
          <Skills
            style={selected}
          />
          <Projects
            style={next}
          />
          <Contact
            style={next}
          />
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
        <div id="bottom" />
      </div>
    );
  }
}

export default App;
