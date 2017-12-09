import React, { Component } from 'react';
import Navbar from './Navbar';
import NavButtons from './buttons/buttons';

export default class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Contact" id="Contact">
                Contact
                {/* <NavButtons current={5} /> */}
                <Navbar id="Navbar" />
            </div>
        )
    }
}