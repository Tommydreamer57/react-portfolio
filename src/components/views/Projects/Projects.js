import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar';

// import Navbar from './Navbar';
// import NavButtons from './buttons/buttons';

export default class Projects extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setRoute()
    }
    render() {
        return (
            <div className="content" id="Projects">
                <h1>Projects</h1>
            </div>
        )
    }
}