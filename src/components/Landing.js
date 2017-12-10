import React, { Component } from 'react';

export default class Landing extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setRoute()
    }
    render() {
        return (
            <div className="Landing" id="Landing">
                Landing
            </div>
        )
    }
}