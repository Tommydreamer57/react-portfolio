import React, { Component } from 'react';
import './buttons.css';
import { Link } from 'react-router-dom';

export default class NavButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routes: [
                "",
                "/",
                "/about",
                "/skills",
                "/projects",
                "/contact",
                ""
            ],
            current: 1
        }
    }
    render() {

        return (
            <div id="NavButtons">
                <button id="menu-button">
                    <div id="menu-one" />
                    <div id="menu-two" />
                    <div id="menu-three" />
                </button>
                <button className={this.props.current > 1 ? "arrow left" : "arrow left left-away"}>
                    <Link to={this.state.routes[this.props.current - 1]} >
                        <div id="left-top" />
                        <div id="left-bottom" />
                    </Link>
                </button>
                <button className={this.props.current < 5 ? "arrow right" : "arrow right right-away"}>
                    <Link to={this.state.routes[this.props.current + 1]} >
                        <div id="right-top" />
                        <div id="right-bottom" />
                    </Link>
                </button>
            </div>
        )
    }
}
