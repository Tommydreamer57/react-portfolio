import React, { Component } from 'react';
// import Navbar from './Navbar';
// import NavButtons from './buttons/buttons';

export default class Skills extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="content" id="Skills" style={this.props.style}>
                <h1>Skills</h1>
                {/* <NavButtons current={3} /> */}
                {/* <Navbar id="Navbar" /> */}
            </div>
        )
    }
}