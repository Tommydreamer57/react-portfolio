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
                "My love for code is largely a branch off of my love for language. I studied German in high school and college, and have also studied Italian, Spanish, Polish, and Russian. I have found code and language to be similar in both their challenge and their creative ability.",
                "Since completing a project on information theory in 8th grade, I have always taken interest in information and how it is transmitted and received in all its different forms - audible communication, words, connotations, body-language, ink on paper, or pixels on a screen.",
                "This project marked the beginning of my fascination with language and communication.",
                "In high school I studied German and developed a greater love for language. I continued studying German through high school then spent two years in Germany before returning to America to continue my studies.",
                "During my third year of college I realized that my talent for human language might be transferrable to computer language. With that realization I knew I had to learn to code.",
                "I decided to put off my language studies until I have the opportunity to learn each language in its native land, and devote my current efforts to this new realm of communication.",
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
                {
                    this.bio.more.slice(0, 2).map(More)
                }
                <div className="more-info" style={{
                    maxHeight: this.state.open ? "500vh" : "1px"
                }}>
                    <p style={{ textAlign: "center" }}>...</p>
                    {
                        this.bio.more.slice(2).map(More)
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