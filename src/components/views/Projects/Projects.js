import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar';
import './Projects.css';
import personal from '../../assets/Personal Project Screenshot.PNG';
import group from '../../assets/CodeWars Screenshot.PNG';
import trivia from '../../assets/Trivia Trends Screenshot.PNG';

function Project(project) {
    return (
        <div className="project">
            <div className="info-wrapper">
                <div className="info">
                    <h2>{project.title}</h2>
                    <h3>{project.subtitle}</h3>
                    {
                        project.description.map(Desc)
                    }
                </div>
                <a href={project.url} className="image">
                    <img src={project.img} />
                </a>
            </div>
            <div className="tech-list">
                {
                    project.tech.map(Tech)
                }
            </div>
        </div>
    )
}

function Desc(desc) {
    return (
        <p>{desc}</p>
    )
}

function Tech(tech) {
    return (
        <div className="Tech">
            <h4>{tech.name}<div className="slide" /></h4>
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
                description: ["I built this project using React on Redux with the SlateJS text-editing library and Passport-Auth0 authentication. Users can navigate through posts and add comments, responses and favorites. Admins can login to create, edit, and publish new posts"],
                img: personal,
                url: "http://personalproject.thomaslowry.me",
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
                description: ["I worked together with Chase Davis and Conner Jensen to create this clone of CodeWars.com, a webapp for practicing code.", "My responsibilities"],
                img: group,
                url: "http://groupproject.thomaslowry.me",
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
                description: ["Trivia question app"],
                img: trivia,
                url: "http://trivia.thomaslowry.me",
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
        document.getElementById('App').scrollTop = 0
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