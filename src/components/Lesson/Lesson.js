import React, { Component } from 'react';
import './Lesson.scss';

import lessons from './../../lessons';

import LessonAudioController from './LessonAudioController/LessonAudioController';
import LessonTitle from './LessonTitle/LessonTitle';
import LessonPhrases from './LessonPhrases/LessonPhrases';
import LessonDialogue from './LessonDialogue/LessonDialogue';
import LessonAddition from './LessonAddition/LessonAddition';

class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: null,
            audioSpeed: '1'
        }
    }

    getAudioSpeed = () => {
        //Funkcja sprawdza tempo, zapisane w sessionStorage.
        const audioSpeed = sessionStorage.getItem("audioSpeed");
        if (audioSpeed === '0.5' || audioSpeed === '0.75' || audioSpeed === '1') {
            this.setState({
                audioSpeed: audioSpeed
            })
        }        
    }
    playAudio = sound => {
        //Tempo audio bierze się z sessionStorage. Jeżeli znaczenia nie ma, to zostaje ustalone jako 1.       
        const audioSpeed = this.state.audioSpeed;

        //Funkcja zapisuje audio do state. Jeżeli jest wykonywane poprzednie audio, to zatrzymuje się. Audio ze state zapisuje się do zmiennej. Wreszcie audio wykonuje się w ustalonym poprzednio tempie.
        if (sound) {
            if (this.state.audio) {
                this.state.audio.pause();
            }
            this.setState({
                audio: new Audio(sound)
            }, () => {
                const audio = this.state.audio;
                audio.playbackRate = audioSpeed;
                audio.play()
            });
        }
    }

    componentDidMount() {
        this.getAudioSpeed();
    }
    render() {
        const indexOfLesson = this.props.match.params.index;
        const lesson = lessons[indexOfLesson];
        const { lang, isMobile } = this.props;
        const { audioSpeed } = this.state;

        return (
            <div className="lesson-wrap">
                <LessonAudioController
                    getAudioSpeed={this.getAudioSpeed}
                    audioSpeed={audioSpeed}
                    isMobile={isMobile} />
                <LessonTitle title={lesson.title} lang={lang} />
                {(lesson.phrases) ?
                    <LessonPhrases
                        phrases={lesson.phrases}
                        lang={lang}
                        playAudio={this.playAudio} /> :
                    null
                }
                {
                    (lesson.phrases && (lesson.dialogue || lesson.addition)) ?
                        <div className="lesson-line" /> :
                        null
                }
                {
                    (lesson.dialogue) ?
                        <LessonDialogue
                            dialogue={lesson.dialogue}
                            lang={lang}
                            playAudio={this.playAudio} /> :
                        null
                }
                {
                    (lesson.dialogue && lesson.addition) ?
                        <div className="lesson-line" /> :
                        null
                }
                {
                    (lesson.addition) ?
                        <LessonAddition
                            addition={lesson.addition}
                            lang={lang} /> :
                        null
                }
            </div>
        )
    }
}

export default Lesson;