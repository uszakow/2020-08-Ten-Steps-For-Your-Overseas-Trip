import React from 'react';

import HowToUseItem from './HowToUseItem/HowToUseItem';

import howtouse from './content';

const HowToUse = props => {
    const { lang } = props;

    return (
        <>
            {howtouse.map((item, index) => (
                <HowToUseItem key={index} content={item} lang={lang} number={index + 1} />
            ))}
        </>
    )
}

export default HowToUse;