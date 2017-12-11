import React, { Component } from 'react';
// import Navbar from './Navbar';
// import NavButtons from './buttons/buttons';

export default class Skills extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setRoute()
    }
    render() {
        return (
            <div className="content" id="Skills">
                <h1>Skills</h1>
                {/* <NavButtons current={3} /> */}
                {/* <Navbar id="Navbar" /> */}
            </div>
        )
    }
}

// skills
// HTML CSS JavaScript  |  React Redux Node Sass Express Massive PostgreSQL  |  Angular JQuery