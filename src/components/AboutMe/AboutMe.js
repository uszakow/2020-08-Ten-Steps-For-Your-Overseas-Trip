import React from 'react';

import AboutMeIntroducing from './AboutMeIntroducing/AboutMeIntroducing';
import AboutMeTechnologies from './AboutMeTechnologies/AboutMeTechnologies';
import AboutMeExamples from './AboutMeExamples/AboutMeExamples';

const AboutMe = props => {
    const { lang } = props;

    return (
        <>
            <AboutMeIntroducing lang={lang} />
            <AboutMeTechnologies lang={lang} />
            <AboutMeExamples lang={lang} />
        </>
    )
}

export default AboutMe;