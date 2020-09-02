import React from 'react';
import './LessonDialogue.scss';

const LessonDialogue = props => {
    const { dialogue, lang, playAudio } = props;
    const name = (lang === "pol" ? "namepol" : "nameeng");

    return (
        <>
            {dialogue.map((item, index) => (
                <div key={index} className="lesson-dialogue">
                    <span>
                        {item.name ? `${item[name]}: ` : "\u2013 "}
                        {item[lang]}
                    </span>
                    <button className="lesson-button" onClick={() => playAudio(item.audio)}>
                        {item.rus}
                    </button>
                </div>
            ))}
        </>
    )
}

export default LessonDialogue;