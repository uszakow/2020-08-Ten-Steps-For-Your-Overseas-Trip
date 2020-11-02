import React from 'react';
import './AboutMeIntroducing.scss';

import photo from './../../../img/AboutMe/Introducing/Uszakow.jpg';

const content = [
    {
        pol: "Cześć! Nazywam się Paweł Uszakow i jestem autorem tej aplikacji. Mam nadzieję, że ona Ci się podoba!",
        eng: "Hi! My name is Paweł Uszakow and I am the author of this application. I hope you like it!",
    },
    {
        pol: "Jestem początkującym front-end developerem. Obecnie piszę aplikacje w React oraz uczę się kolejnych technologii. Zapraszam do kontaktu \u{1F609}",
        eng: "I am a beginner front-end developer. I am currently writing applications in React and learning new technologies. Feel free to contact me \u{1F609}",
    },
]

const AboutMeIntroducing = props => {
    const { lang } = props;

    return (
        <div className="aboutme-introducing">
            <img src={photo} alt="Paweł Uszakow" className="aboutme-introducing-img" />
            <div>
                {content.map((item, index) => (
                    <p key={index}>{item[lang]}</p>
                ))}
                <div className="aboutme-introducing-link">
                    <span>GitHub: </span>
                    <a href="https://github.com/uszakow" target="_blank" rel="noopener noreferrer">https://github.com/uszakow</a>
                </div>
                <div className="aboutme-introducing-link">
                    <span>LinkedIn: </span>
                    <a href="https://www.linkedin.com/public-profile/in/p-uszakow" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/public-profile/in/p-uszakow</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMeIntroducing;