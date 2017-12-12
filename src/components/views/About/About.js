import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar';

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
        document.getElementById('App').scrollTop = 0
    }
    render() {
        return (
            <div className="content" id="About">
                <h1>Hi, I'm Tommy Lowry</h1>
                <h3>I am a full-stack web-developer, linguist, and artist.</h3>
                <p>My intetest lies in ... My specialties include React, Node, and plain vanilla JavaScript. Having lived across the United States and Germany, I am fluent in English and German (largely self-taught), and have further background in multiple Romantic and Slavic languages. My favorite forms of art are pastel painting, origami, and all forms of music.<br/><br/>My interests...</p>
            </div>
        )
    }
}