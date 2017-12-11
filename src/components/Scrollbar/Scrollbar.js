import React, { Component } from 'react';
import './Scrollbar.css';

export default class Srollbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scroll: false,
            height: 0,
            top: 0,
            contentHeight: 0,
            viewHeight: 0
        }
    }
    componentDidMount = () => {
        this.setSize()
        document.getElementById("App").addEventListener('scroll', this.scroll)
        window.addEventListener('resize', this.setSize)
    }
    setSize = () => {
        // console.log('setting size')
        // grab constants to save on this.const
        let contentHeight = 0
        let viewHeight = window.innerHeight
        let { scroll, height } = this.state

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

        if (contentHeight <= viewHeight + 4) {
            scroll = false
            height = 0
        }

        this.setState({
            scroll,
            height,
            contentHeight,
            viewHeight
        })
        // console.log(this.const)
    }
    scroll = () => {
        let { contentHeight, viewHeight } = this.state
        let scrollTop = document.getElementById('App').scrollTop

        // Height / (ViewHeight - 4) === ViewHeight / ContentHeight
        // Top / (ViewHeight - 4) === ScrollTop / ContentHeight

        // css height attribute of the scrollbar
        let height = (viewHeight - 4) * viewHeight / contentHeight
        // the ' - 4' accounts for padding around the scrollbar

        // css top attribute of the scrollbar
        let top = scrollTop * (viewHeight - 4) / contentHeight + 2
        // the ' + 2' accounts for padding above the scrollbar

        // console.log('new props')
        // console.log(height, top)
        // console.log(contentHeight, scrollTop)
        // console.log(viewHeight)

        let { scroll } = this.state

        if (contentHeight - viewHeight <= 10) {
            if (this.state.scroll) {
                console.log('no scroll')
                scroll = false
            }
        }
        else {
            if (!this.state.scroll) {
                console.log('scroll')
                scroll = true
            }
        }

        this.setState({
            top,
            scroll,
            height
        })
    }
    render = () => {
        let { height, top } = this.state
        // console.log(this.state)
        return (
            <div id="Scrollbar-wrapper">
                {
                    this.state.height ?
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
