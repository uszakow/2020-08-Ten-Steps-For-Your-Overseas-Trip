import React from 'react';
import './AboutMeTechnologies.scss';

import bootstrap from './../../../img/AboutMe/Technologies/bootstrap.svg';
import css from './../../../img/AboutMe/Technologies/css.svg';
import git from './../../../img/AboutMe/Technologies/git.svg';
import html from './../../../img/AboutMe/Technologies/html.svg';
import javascript from './../../../img/AboutMe/Technologies/javascript.svg';
import npm from './../../../img/AboutMe/Technologies/npm.svg';
import react from './../../../img/AboutMe/Technologies/react.svg';
import sass from './../../../img/AboutMe/Technologies/sass.svg';

const content = {
    pol: "Wykorzystywałem następujące technologie:",
    eng: "I used the following technologies:"
}

const AboutMeTechnologies = props => {
    const { lang } = props;

    return (
        <div className="aboutme-technologies-wrap">
            <span>{content[lang]}</span>
            <div className="aboutme-technologies-icons">
                <img src={react} alt="React" title="React" width="50" />
                <img src={javascript} alt="JavaScript" title="JavaScript" width="50" />
                <img src={html} alt="HTML 5" title="HTML 5" width="50" />
                <img src={css} alt="CSS 3" title="CSS 3" width="50" />
                <img src={sass} alt="Sass" title="Sass" width="50" />
                <img src={bootstrap} alt="Bootstrap 4" title="Bootstrap 4" width="50" />
                <img src={git} alt="Git" title="Git" width="50" />
                <img src={npm} alt="npm" title="npm" width="50" />
            </div>
        </div>
    )
}

export default AboutMeTechnologies;