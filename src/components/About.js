import React, { Component } from 'react';
// import Navbar from './Navbar';
// import NavButtons from './buttons/buttons';

export default class About extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        if (this.props.previous) {
            
        }
    }
    componentDidMount() {
        this.props.setRoute()
    }
    render() {
        return (
            <div className="About" id="About">
                About
                {/* <NavButtons current={2} /> */}
                {/* <Navbar id="Navbar"  /> */}
            </div>
        )
    }
}