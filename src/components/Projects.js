import React, { Component } from 'react';
// import Navbar from './Navbar';
// import NavButtons from './buttons/buttons';

export default class Projects extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="content" id="Projects" style={this.props.style}>
                <h1>Projects</h1>
                {/* <NavButtons current={4} /> */}
                {/* <Navbar id="Navbar" /> */}
            </div>
        )
    }
}