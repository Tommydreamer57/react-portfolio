import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar';

// import Navbar from './Navbar';
// import NavButtons from './buttons/buttons';

export default class Contact extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setRoute()
        document.getElementById('App').scrollTop = 0
    }
    render() {
        return (
            <div className="content" id="Contact">
                <h1>Contact</h1>
                {/* <NavButtons current={5} /> */}
                {/* <Navbar id="Navbar" /> */}
            </div>
        )
    }
}