import React, { Component, Children } from 'react';
// import logo from './logo.svg';
import './App.css';

import About from './components/views/About/About';
import Skills from './components/views/Skills/Skills';
import Projects from './components/views/Projects/Projects';
import Contact from './components/views/Contact/Contact';
import Menu from './components/Menu/Menu';
import Scrollbar from './components/Scrollbar/Scrollbar';
import NavButtons from './components/buttons/buttons';

import { Route, Switch } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const firstChild = props => {
  let childrenArray = Children.toArray(props.children)
  return childrenArray || null
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      routes: [
        "",
        "/",
        "/skills",
        "/projects",
        "/contact",
        ""
      ],
      current: 1,
      menu: false,
    }
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

  render = () => {
    console.log()
    return (
      <div className="App" id="App" onScroll={this.onScroll}>
        <content>
          <Switch>
            <Route exact
              path="/"
              children={({ match, ...rest }) => {
                return (
                  <TransitionGroup component={firstChild}>
                    {match && <About setRoute={() => this.setRoute(1)} previous={this.state.route} {...rest} />}
                  </TransitionGroup>
                )
              }}
            />
            <Route
              path="/skills"
              children={({ match, ...rest }) => {
                return (
                  <TransitionGroup component={firstChild}>
                    {match && <Skills setRoute={() => this.setRoute(2)} previous={this.state.route} {...rest} />}
                  </TransitionGroup>
                )
              }}
            />
            <Route
              path="/projects"
              children={({ match, ...rest }) => {
                return (
                  <TransitionGroup component={firstChild}>
                    {match && <Projects setRoute={() => this.setRoute(3)} previous={this.state.route} {...rest} />}
                  </TransitionGroup>
                )
              }}
            />
            <Route
              path="/contact"
              children={({ match, ...rest }) => {
                return (
                  <TransitionGroup component={firstChild}>
                    {match && <Contact setRoute={() => this.setRoute(4)} previous={this.state.route} {...rest} />}
                  </TransitionGroup>
                )
              }}
            />
          </Switch>
        </content>
        <NavButtons
          current={this.state.current}
          open={this.state.menu}
          toggleMenu={this.toggleMenu}
        />
        <Menu
          section={this.state.routes[this.state.current]}
          open={this.state.menu}
          toggleMenu={this.toggleMenu}
        />
        <Scrollbar />
        <div id="bottom" />
      </div>
    );
  }
}

export default App;
