import React, { Component } from 'react';
import Navbar from './Navbar';
import NavButtons from './buttons/buttons';

export default class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="About" id="About">
                About
                {/* <NavButtons current={2} /> */}
                <Navbar id="Navbar"  />
            </div>
        )
    }
}