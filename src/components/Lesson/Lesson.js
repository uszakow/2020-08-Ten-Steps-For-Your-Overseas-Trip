import React, { Component } from 'react';
import './Lesson.scss';

import lessons from './../../lessons';

import LessonTitle from './LessonTitle/LessonTitle';
import LessonPhrases from './LessonPhrases/LessonPhrases';

class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                    <LessonPhrases phrases={lesson.phrases} lang={lang} /> :
                    null
                }
                {
                    (lesson.phrases && lesson.dialogue) ?
                        <div className="lesson-line" /> :
                        null
                }
            </div>
        )
    }
}

export default Lesson;