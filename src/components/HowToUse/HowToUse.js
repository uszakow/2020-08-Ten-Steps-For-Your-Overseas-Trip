import React from 'react';

import howtouse from './content';
import HowToUseItem from './HowToUseItem/HowToUseItem';

const HowToUse = props => {
    const { lang } = props;

    return (
        <div>
            {howtouse.map((item, index) => (
                <HowToUseItem key={index} content={item} lang={lang} number={index + 1} />
            ))}
        </div>
    )
}

export default HowToUse;