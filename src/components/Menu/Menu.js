import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu(props) {
    console.log(props.section)
    return (
        <div id="Menu" className={props.open ? "open" : "closed"}>
            <Link to="/" className={props.section === '/landing' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                Home
            </Link>
            <Link to="/about" className={props.section === '/about' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                About
            </Link>
            <Link to="/skills" className={props.section === '/skills' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                Skills
            </Link>
            <Link to="/projects" className={props.section === '/projects' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                Projects
            </Link>
            <Link to="/contact" className={props.section === '/contact' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                Contact
            </Link>
        </div>
    )
}
