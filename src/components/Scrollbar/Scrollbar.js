import React, { Component } from 'react';
import './Scrollbar.css';

export default class Srollbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scroll: false
        }
    }
    componentWillReceiveProps(props) {
        let contentHeight = document.getElementById('bottom').offsetTop
        let scrollTop = document.getElementById('App').scrollTop
        let viewHeight = window.innerHeight

        // Height / (ViewHeight - 4) === ViewHeight / ContentHeight
        // Top / (ViewHeight - 4) === ScrollTop / ContentHeight
        
        // css height attribute of the scrollbar
        let height = (viewHeight - 4) * viewHeight / contentHeight
        // the ' - 4' accounts for padding around the scrollbar

        // css top attribute of the scrollbar
        let top = scrollTop * (viewHeight - 4) / contentHeight + 2
        // the ' + 2' accounts for padding around the scrollbar

        console.log('new props')
        console.log(height, top)
        console.log(contentHeight, scrollTop)
        console.log(viewHeight)

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
