import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar';
import './Projects.css';

function Project(project) {
    return (
        <div className="project">
            <div className="info-wrapper">
                <div className="info">
                    <h2>{project.title}</h2>
                    <h3>{project.subtitle}</h3>
                    <p>{project.description}</p>
                </div>
                <img src={project.imgurl} />
            </div>
            <div className="tech-list">
                {
                    project.tech.map(Tech)
                }
            </div>
        </div>
    )
}

function Tech(tech) {
    return (
        <div className="Tech">
            <h4>{tech.name}</h4>
        </div>
    )
}

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.projects = [
            {
                title: "Blog Template",
                subtitle: "DevMountain Personal Project",
                description: "Template blog site",
                imgurl: "",
                tech: [
                    { name: "React", icon: "devicon-react-original" },
                    { name: "Redux", icon: "" },
                    { name: "Sass", icon: "devicon-sass-original" },
                    { name: "Slate", icon: "" },
                    { name: "Node", icon: "devicon-nodejs-plain" },
                    { name: "Auth0", icon: "" },
                    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                ]
            },
            {
                title: "CodeWars Clone",
                subtitle: "DevMountain Group Project",
                description: "JavaScript toy-problem app",
                imgurl: "",
                tech: [
                    { name: "React", icon: "devicon-react-original" },
                    { name: "Redux", icon: "" },
                    { name: "Sass", icon: "devicon-sass-original" },
                    { name: "Slate", icon: "" },
                    { name: "Ace", icon: "" },
                    { name: "Node", icon: "devicon-nodejs-plain" },
                    { name: "Auth0", icon: "" },
                    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                ]
            },
            {
                title: "Trivia Trends",
                subtitle: "Angular Simulation",
                description: "Trivia question app",
                imgurl: "",
                tech: [
                    { name: "AngularJS", icon: "devicon-angularjs-plain" },
                    { name: "Node", icon: "devicon-nodejs-plain" },
                    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                ]
            },
        ]
    }
    componentDidMount() {
        this.props.setRoute()
    }
    render() {
        return (
            <div className="content" id="Projects">
                <h1>Projects</h1>
                {
                    this.projects.map(Project)
                }
            </div>
        )
    }
}