import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu(props) {
    return (
        <div id="Menu" className={props.open ? "open" : "closed"}>
            <div className={props.section === 'Landing' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <Link to="/" >
                    Landing
                </Link>
            </div>
            <div className={props.section === 'About' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <Link to="/about" >
                    About
                </Link>
            </div>
            <div className={props.section === 'Skills' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <Link to="/skills" >
                    Skills
                </Link>
            </div>
            <div className={props.section === 'Projects' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <Link to="/projects" >
                    Projects
                </Link>
            </div>
            <div className={props.section === 'Contact' ? 'nav-button selected' : 'nav-button'} onClick={props.toggleMenu} >
                <Link to="/contact" >
                    Contact
                </Link>
            </div>
        </div>
    )
}
