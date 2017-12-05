import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      section: 'Landing'
    }
  }

  componentDidMount() {
    console.log(document.getElementById('Landing').offsetTop)
    console.log(document.getElementById('About').offsetTop)
    console.log(document.getElementById('Skills').offsetTop)
    console.log(document.getElementById('Projects').offsetTop)
    console.log(document.getElementById('Contact').offsetTop)
    console.log(document.getElementById('Bottom').offsetTop)
  }

  getScrollTop = () => {
    // console.log('scrolling')
    let current = document.getElementById('App').scrollTop
    let offset = id => document.getElementById(id).offsetTop
    let section = 'Landing'

    // Assign variables to the halfway mark between each section
    let landing = offset('About') / 2
    let about = (offset('About') + offset('Skills')) / 2
    let skills = (offset('Skills') + offset('Projects')) / 2
    let projects = (offset('Projects') + offset('Contact')) / 2
    let contact = (offset('Contact') + offset('Bottom')) / 2

    if (current >= landing && current < about) {
      section = 'About'
    }
    else if (current >= about && current < skills) {
      section = 'Skills'
    }
    else if (current >= skills && current < projects) {
      section = 'Projects'
    }
    else if (current >= projects && current < contact) {
      section = 'Contact'
    }
    if (section != this.state.section) {
      // console.log(this.state)
      this.setState({
        section
      })
    }  
  }

  scrollTo = id => {
    // console.log('scrolling')
    let start = document.getElementById('App').scrollTop
    let end = document.getElementById(id).offsetTop
    let half = (start + end) / 2
    let difference = end - start
    
    console.log(start, end, difference)

    let scroll = () => {
      let i = 0.000001
      let current = document.getElementById('App').scrollTop
      if (Math.abs(current - end) > 2) {
        document.getElementById('App').scrollTop += (difference * 2 / Math.abs(difference))
        setTimeout(() => scroll(), i)
      }
      else {
        document.getElementById('App').scrollTop = end
        console.log(document.getElementById('App').scrollTop)
      }
    }

    scroll()

  }

  render() {
    
    return (
      <div className="App" id="App" onScroll={this.getScrollTop}>
        <Landing id="Landing" />
        <About id="About" />
        <Skills id="Skills" />
        <Projects id="Projects" />
        <Contact id="Contact" />
        <div id="Bottom" />
        <Navbar id="Navbar" scrollTo={this.scrollTo} section={this.state.section}/>
      </div>
    );
  }
}

export default App;
