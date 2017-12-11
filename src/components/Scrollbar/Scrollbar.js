import React, { Component } from 'react';
import './Scrollbar.css';

export default class Srollbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scroll: true
        }
        this.const = {
            contentHeight: 0,
            viewHeight: 0
        }
    }
    componentDidMount() {
        // grabbing constants to save on this.const
        let contentHeight = 0

        function findTallestNode(nodes) {
            for (let i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].scrollHeight && nodes[i].clientHeight) {
                    let elHeight = Math.max(nodes[i].scrollHeight, nodes[i].clientHeight)
                    contentHeight = Math.max(contentHeight, elHeight);
                }
                if (nodes[i].childNodes.length) findTallestNode(nodes[i].childNodes);
            }
        }

        findTallestNode(document.documentElement.childNodes)

        let viewHeight = window.innerHeight

        this.const = {
            contentHeight,
            viewHeight
        }

        console.log(this.const)
        document.getElementById("App").addEventListener('scroll', this.scroll)
    }
    scroll = props => {
        let { contentHeight, viewHeight } = this.const
        let scrollTop = document.getElementById('App').scrollTop

        // RATIOS:
        // Height / (ViewHeight - 4) === ViewHeight / ContentHeight
        // Top / (ViewHeight - 4) === ScrollTop / ContentHeight
        
        // css height attribute of the scrollbar
        let height = (viewHeight - 4) * viewHeight / contentHeight
        // the ' - 4' accounts for padding around the scrollbar

        // css top attribute of the scrollbar
        let top = (scrollTop * (viewHeight - 4) / contentHeight) + 2
        // the ' + 2' accounts for padding around the scrollbar

        console.log('new props')
        console.log(height, contentHeight)
        console.log(height / contentHeight)
        console.log(top, scrollTop)
        console.log(top / scrollTop)

        if (contentHeight - viewHeight <= 10) {
            if (this.state.scroll) {
                console.log('no scroll')
                this.setState({
                    scroll: false
                })
            }
        }
        else {
            if (!this.state.scroll) {
                console.log('scroll')
                this.setState({
                    scroll: true,
                    height
                })
            }
        }

        this.setState({
            top
        })
    }
    render() {
        let { height, top } = this.state
        return (
            <div id="Scrollbar-wrapper">
                {
                    this.state.scroll ?
                        <div
                            id="scrollbar"
                            style={{
                                height: height + 'px',
                                top: top + 'px',
                            }}
                        />
                        :
                        null
                }
            </div>
        )
    }
}
