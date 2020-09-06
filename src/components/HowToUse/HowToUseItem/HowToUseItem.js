import React from 'react';
import './HowToUseItem.scss';

const HowToUseItem = props => {
    const { content, lang, number } = props;

    return (
        <p className="howtouse-p">
            <img src={content.img} alt={content.alt} />
            <span>
                {`${number}. `}
                {content[lang]}
            </span>
        </p>
    )
}

export default HowToUseItem;