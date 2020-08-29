import React from 'react';
import './LessonAddition.scss';

const LessonAddition = props => {
    const { addition, lang } = props;

    return (
        <>
            {addition.map((item, index) => (
                <p key={index} className="lesson-addition">
                    {item.img ?
                        <img src={item.img} alt={item.alt} className="lesson-addition-img" /> :
                        null
                    }
                    {item[lang]}
                </p>
            ))}
        </>
    )
}

export default LessonAddition;