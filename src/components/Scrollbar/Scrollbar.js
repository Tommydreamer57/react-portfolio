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
        let scrollBottom = document.getElementById('bottom').offsetTop
        let scrollTop = document.getElementById('App').scrollTop
        let viewHeight = window.innerHeight
        let scrollHeight = scrollBottom - scrollTop - viewHeight
        // console.log(scrollHeight)

        // css height attribute of the scrollbar
        let height = viewHeight / scrollBottom

        // css top attribute of the scrollbar
        let top = scrollTop / scrollBottom
        console.log(top)

        if (scrollBottom - viewHeight <= 10) {
            console.log('no scroll')
            if (this.state.scroll) {
                this.setState({
                    scroll: false
                })
            }
        }
        else {
            console.log('scroll')
            if (!this.state.scroll) {
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
                                height: height * 100 + '%',
                                top: top * 100 + '%',
                            }}
                        />
                        :
                        null
                }
            </div>
        )
    }
}
