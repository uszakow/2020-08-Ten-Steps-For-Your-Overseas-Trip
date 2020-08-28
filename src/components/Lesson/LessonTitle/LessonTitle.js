import React from 'react';
import './LessonTitle.scss';

const LessonTitle = props => {
    const { title, lang } = props;

    return (
        <div className="lesson-title">
            {title.img ?
                <img src={title.img} alt={title.alt} /> :
                null}
            <h1>{title[lang]}</h1>
        </div>
    )
}

export default LessonTitle;