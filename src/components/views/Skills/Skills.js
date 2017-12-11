import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar'
import './Skills.css';

export default class Skills extends Component {
    constructor(props) {
        super(props)
        this.skills = [
            { name: "HTML5", icon: "devicon-html5-plain" },
            { name: "CSS3", icon: "devicon-css3-plain " },
            { name: "ES6", icon: "devicon-javascript-plain" }
        ]
        this.front = [
            { name: "React", icon: "devicon-react-original" },
            { name: "Redux", icon: "" },
            { name: "Sass", icon: "devicon-sass-original" },
            { name: "AngularJS", icon: "devicon-angularjs-plain" },
            { name: "JQuery", icon: "devicon-jquery-plain" }
        ]
        this.back = [
            { name: "Node", icon: "devicon-nodejs-plain" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
            { name: "Auth0", icon: "" },
            { name: "Heroku", icon: "devicon-heroku-plain" }
        ]
        this.lib = [
            { name: "Slate", icon: "" },
            { name: "Ace", icon: "" },
            // { name: "iframes", icon: "" }
        ]
    }
    componentDidMount() {
        this.props.setRoute()
    }
    render() {
        return (
            <div className="content" id="Skills">
                <h1>Skills</h1>
                <div className="skills-header">
                    {
                        this.skills.map(skill => {
                            return (
                                <div className="skill">
                                    <i className={skill.icon} />
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <h2>Front End</h2>
                <div className="skills-section">
                    {
                        this.front.map(skill => {
                            return (
                                <div className="skill">
                                    <i className={skill.icon} />
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <h2>Back End</h2>
                <div className="skills-section">
                    {
                        this.back.map(skill => {
                            return (
                                <div className="skill">
                                    <i className={skill.icon} />
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <h2>Libraries</h2>
                <div className="skills-section">
                    {
                        this.lib.map(skill => {
                            return (
                                <div className="skill">
                                    <i className={skill.icon} />
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

// skills
// HTML CSS JavaScript  |  React Redux Node Sass Express Massive PostgreSQL  |  Angular JQuery