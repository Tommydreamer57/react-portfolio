import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu(props) {
    console.log(props)
    console.log(props.open)
    return (
        <div id="Menu" className={props.open ? "open" : "closed"}>
            <Link to="/" className={props.section === 'Landing' ? 'nav-button selected' : 'nav-button'}>
                Landing
            </Link>
            <Link to="/about" className={props.section === 'About' ? 'nav-button selected' : 'nav-button'}>
                About
            </Link>
            <Link to="/skills" className={props.section === 'Skills' ? 'nav-button selected' : 'nav-button'}>
                Skills
            </Link>
            <Link to="/projects" className={props.section === 'Projects' ? 'nav-button selected' : 'nav-button'}>
                Projects
            </Link>
            <Link to="/contact" className={props.section === 'Contact' ? 'nav-button selected' : 'nav-button'}>
                Contact
            </Link>
        </div>
    )
}
