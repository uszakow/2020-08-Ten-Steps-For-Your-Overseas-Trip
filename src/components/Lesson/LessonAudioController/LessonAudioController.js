import React, { Component } from 'react';
import './LessonAudioController.scss';

class LessonAudioController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    changeAudioSpeed = (event, getAudioSpeed) => {
        const audioSpeed = event.target.value;
        sessionStorage.setItem("audioSpeed", audioSpeed);
        getAudioSpeed();
        this.setState({
            audioSpeed: audioSpeed
        })
    }
    changeAudioConstroller = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        const { getAudioSpeed, audioSpeed, isMobile } = this.props;
        const isOpen = this.state.isOpen;

        const view = isMobile ? "lesson-audiocontroller-mobile" : "lesson-audiocontroller-desctop";
        const hidden = isOpen ? "lesson-audiocontroller-active" : "lesson-audiocontroller-hidden";

        return (
            <div className={`lesson-audiocontroller-wrap ${view} ${hidden}`}>
                <button className="lesson-audiocontroller-control" onClick={this.changeAudioConstroller}>
                    <div />
                </button>
                <input
                    id="controller1"
                    type="radio"
                    name="audioController"
                    value="0.5"
                    checked={audioSpeed === '0.5'}
                    onChange={(event) => this.changeAudioSpeed(event, getAudioSpeed)} />
                <label htmlFor="controller1">x0,5</label>
                <input
                    id="controller2"
                    type="radio"
                    name="audioController"
                    value="0.75"
                    checked={audioSpeed === '0.75'}
                    onChange={(event) => this.changeAudioSpeed(event, getAudioSpeed)} />
                <label htmlFor="controller2">x0,75</label>
                <input
                    id="controller3"
                    type="radio"
                    name="audioController"
                    value="1"
                    checked={audioSpeed === '1'}
                    onChange={(event) => this.changeAudioSpeed(event, getAudioSpeed)} />
                <label htmlFor="controller3">x1</label>
            </div>
        )
    }
}

export default LessonAudioController;