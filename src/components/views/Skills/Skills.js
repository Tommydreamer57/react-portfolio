import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar'
import './Skills.css';

function IconSkill(skill) {
    return (
        <div className="IconSkill">
            {
                skill.icon ?
                    <i className={skill.icon} />
                    :
                    <i>&nbsp;</i>
            }
            <h3>{skill.name}</h3>
        </div>
    )
}

function Skill(skill) {
    return (
        <div className="Skill">
            <h3>{skill.name}</h3>
        </div>
    )
}

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
            { name: "JQuery", icon: "devicon-jquery-plain" },
            // { name: "", icon: "" }
        ]
        this.back = [
            { name: "Node", icon: "devicon-nodejs-plain" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
            { name: "Auth0", icon: "" },
            { name: "Heroku", icon: "devicon-heroku-plain" },
            // { name: "", icon: "" },
            // { name: "", icon: "" }
        ]
        this.lib = [
            { name: "Slate", icon: "" },
            { name: "Ace", icon: "" },
            // { name: "", icon: "" }
            // { name: "iframes", icon: "" }
        ]
    }
    componentDidMount() {
        this.props.setRoute()
    }
    render() {
        return (
            <div className="content" id="Skills">
                <h1>My Skills</h1>
                <div className="skills-header">
                    {
                        this.skills.map(IconSkill)
                    }
                </div>
                <h2>Front End</h2>
                <div className="skills-section">
                    {
                        this.front.map(Skill)
                    }
                </div>
                <h2>Back End</h2>
                <div className="skills-section">
                    {
                        this.back.map(Skill)
                    }
                </div>
                <h2>Libraries</h2>
                <div className="skills-section">
                    {
                        this.lib.map(Skill)
                    }
                </div>
            </div>
        )
    }
}

// skills
// HTML CSS JavaScript  |  React Redux Node Sass Express Massive PostgreSQL  |  Angular JQuery