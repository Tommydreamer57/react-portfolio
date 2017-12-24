import React, { Component } from 'react';
import Scrollbar from '../../Scrollbar/Scrollbar';
import AnimatedWrap from '../../AnimatedWrap';
import LinkedIn from '../../assets/iconmonstr-linkedin-3.svg';
import './Contact.css';

function Link(link) {
    return (
        <a href={link.link} className="Link">
            {
                link.icon ?
                    <i className={link.icon} />
                    :
                    link.svg ?
                        <img src={link.svg} />
                        :
                        null
            }
            <h3>{link.name}</h3>
        </a>
    )
}

class Contact extends Component {
    constructor(props) {
        super(props)
        this.links = [
            {
                name: "GitHub",
                icon: "devicon-github-plain",
                link: "http://github.com/tommydreamer57"
            },
            {
                name: "LinkedIn",
                svg: LinkedIn,
                link: "http://linkedin.com/in/thomasglowry"
            }
        ]
    }
    componentDidMount() {
        this.props.setRoute()
        document.getElementById('App').scrollTop = 0
    }
    render() {
        return (
            <div className="content" id="Contact">
                <h1>Contact</h1>
                <div className="links">
                    {
                        this.links.map(Link)
                    }
                </div>
            </div>
        )
    }
}

export default AnimatedWrap(Contact)
