import React, { Component } from 'react';
import './LessonAudioController.scss';

class LessonAudioController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioSpeed: sessionStorage.getItem("audioSpeed"),
            isOpen: false
        }
    }

    changeAudioSpeed = event => {
        const audioSpeed = event.target.value;
        sessionStorage.setItem("audioSpeed", audioSpeed);
        this.setState({
            audioSpeed: audioSpeed
        })
    }

    render() {
        return (
            <div>
                <button>
                    <span />
                </button>
                <input
                    id="controller1"
                    type="radio"
                    name="audioController"
                    value="0.5"
                    checked={this.state.audioSpeed === '0.5'}
                    onChange={this.changeAudioSpeed} />
                <label htmlFor="controller1">x0,5</label>
                <input
                    id="controller2"
                    type="radio"
                    name="audioController"
                    value="0.75"
                    checked={this.state.audioSpeed === '0.75'}
                    onChange={this.changeAudioSpeed} />
                <label htmlFor="controller2">x0,75</label>
                <input
                    id="controller3"
                    type="radio"
                    name="audioController"
                    value="1"
                    checked={this.state.audioSpeed === '1'}
                    onChange={this.changeAudioSpeed} />
                <label htmlFor="controller3">x1</label>
            </div>
        )
    }
}

export default LessonAudioController;