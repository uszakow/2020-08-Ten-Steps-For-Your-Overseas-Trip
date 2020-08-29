import React, { Component } from 'react';
import './Lesson.scss';

import lessons from './../../lessons';

import LessonTitle from './LessonTitle/LessonTitle';
import LessonPhrases from './LessonPhrases/LessonPhrases';
import LessonDialogue from './LessonDialogue/LessonDialogue';
import LessonAddition from './LessonAddition/LessonAddition';

class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: null,
        }
    }

    playAudio = sound => {
        //Funkcja zapisuje audio do state. Jeżeli jest wykonywane poprzednie audio, to zatrzymuje się. Audio ze state zapisuje się do zmiennej, na skutek czego można zmieniać tempo wykonania. Wreszcie audio wykonuje się z potrzebnymi parametrami.
        if (sound) {
            if (this.state.audio) {
                this.state.audio.pause();
            }
            this.setState({
                audio: new Audio(sound)
            }, () => {
                const audio = this.state.audio;
                // audio.playbackRate = 0.5;
                audio.play()
            });
        }
    }

    render() {
        const indexOfLesson = this.props.match.params.index;
        const lesson = lessons[indexOfLesson];
        const lang = this.props.lang;

        // console.log(lesson)

        return (
            <div className="lesson-wrap">
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