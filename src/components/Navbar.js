import React, { Component } from 'react';
// import Scroll from 'react-scroll-to-element';

export default function Navbar(props) {
    return (
        <div className="Navbar">
            <button className={props.section === 'Landing' ? 'nav-button selected' : 'nav-button'}>
                Landing
            </button>
            <button className={props.section === 'About' ? 'nav-button selected' : 'nav-button'}>
                About
            </button>
            <button className={props.section === 'Skills' ? 'nav-button selected' : 'nav-button'}>
                Skills
            </button>
            <button className={props.section === 'Projects' ? 'nav-button selected' : 'nav-button'}>
                Projects
            </button>
            <button className={props.section === 'Contact' ? 'nav-button selected' : 'nav-button'}>
                Contact
            </button>
        </div>
    )
}
