import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className="Navbar">
                <button onClick={() => this.props.scrollTo("Landing")}
                    className={this.props.section === 'Landing' ? 'nav-button selected' : 'nav-button'}>
                    Landing
                    </button>
                <button onClick={() => this.props.scrollTo("About")}
                    className={this.props.section === 'About' ? 'nav-button selected' : 'nav-button'}>
                    About
                    </button>
                <button onClick={() => this.props.scrollTo("Skills")}
                    className={this.props.section === 'Skills' ? 'nav-button selected' : 'nav-button'}>
                    Skills
                    </button>
                <button onClick={() => this.props.scrollTo("Projects")}
                    className={this.props.section === 'Projects' ? 'nav-button selected' : 'nav-button'}>
                    Projects
                    </button>
                <button onClick={() => this.props.scrollTo("Contact")}
                    className={this.props.section === 'Contact' ? 'nav-button selected' : 'nav-button'}>
                    Contact
                    </button>
            </div>
        )
    }
}
