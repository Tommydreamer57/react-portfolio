import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu(props) {
    // console.log(props.section)
    return (
        <div id="Menu" className={props.open ? "open" : "closed"}>



            <Link to="/" className={props.section === '/' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="nav-text">Home</div>
            </Link>
            <Link to="/about" className={props.section === '/about' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="nav-text">About</div>
            </Link>
            <Link to="/skills" className={props.section === '/skills' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="nav-text">Skills</div>
            </Link>
            <Link to="/projects" className={props.section === '/projects' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="nav-text">Projects</div>
            </Link>
            <Link to="/contact" className={props.section === '/contact' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="nav-text">Contact</div>
            </Link>
        </div>
    )
}
