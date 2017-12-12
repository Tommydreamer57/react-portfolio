import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar';
import './About.css';

let i = 0

function More(more) {
    return (
        <p key={i++}>{more}</p>
    )
}

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.bio = {
            greeting: "Hi, I'm Tommy Lowry",
            intro: "I am a full-stack web-developer, linguist, and artist.",
            more: [
                "My programming specialties include React, Node, and plain vanilla JavaScript. Having lived across the United States and Germany, I am fluent in both English and German.",
                "Since completing a project on information theory in 8th grade, I have always taken interest in information and how it is transmitted and received in all its different forms - audible communication, words, connotations, body-language, ink on paper, or pixels on a screen.",
                "In high school I studied German and developed a love for language. I continued studying German through high school then spent two years in Germany before returning to America to continue my studies.",
                "It wasn't until spring of 2017 that I realized that",
            ]
        }
    }
    componentDidMount = () => {
        this.props.setRoute()
        document.getElementById('App').scrollTop = 0
    }
    toggleMore = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <div className="content" id="About">
                <h1>{this.bio.greeting}</h1>
                <h3>{this.bio.intro}</h3>
                <p>{this.bio.more[0]}</p>
                <div className="more-info" style={{
                    maxHeight: this.state.open ? "500vh" : "1px"
                }}>
                    {
                        this.bio.more.slice(1).map(More)
                    }
                </div>
                <div className="button-wrapper">
                    <button className={this.state.open ? "more-arrow less-arrow" : "more-arrow"} onClick={this.toggleMore} >
                        <div className="wrapper">
                            <div id="left" className="button-line" />
                        </div>
                        <h4>{this.state.open ? "less" : "more"}</h4>
                        <div className="wrapper">
                            <div id="right" className="button-line" />
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}