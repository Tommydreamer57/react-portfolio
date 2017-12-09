import React, { Component } from 'react';
import Navbar from './Navbar';
import NavButtons from './buttons/buttons';

export default class Landing extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Landing" id="Landing">
                Landing
                {/* <NavButtons current={1} /> */}
                <Navbar id="Navbar" />
            </div>
        )
    }
}