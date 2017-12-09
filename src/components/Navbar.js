import React, { Component } from 'react';
// import Scroll from 'react-scroll-to-element';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="Navbar">
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
