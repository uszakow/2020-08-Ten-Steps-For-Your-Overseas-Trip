import React from 'react';
import './LessonPhrases.scss';

const LessonPhrases = props => {
    const { phrases, lang } = props;

    return (
        <>
            {phrases.map((item, index) => {
                let css;
                if (item.type === 'phrase') {
                    css = "lesson-phrases-phrase";
                } else {
                    css = "lesson-phrases-add";
                }

                return (
                    <div key={index} className={css}>
                        {item.img ?
                            <img src={item.img} alt={item.alt} className="lesson-phrases-img" /> :
                            <span className="lesson-phrases-img" />}
                        <span>
                            {(css === "lesson-phrases-add") ? "\u2043 " : ""}
                            {item[lang]}
                        </span>
                        <button>
                            {(css === "lesson-phrases-add") ? "\u2043 " : ""}
                            {item.rus}
                        </button>                        
                    </div>
                )
            })}
        </>
    )
}

export default LessonPhrases;