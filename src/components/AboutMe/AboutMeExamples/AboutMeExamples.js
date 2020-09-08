import React from 'react';
import './AboutMeExamples.scss';

import examples from './examples';

const AboutMeExamples = props => {
    const { lang } = props;
    const textForCard = (lang === "pol" ? "Kod źródłowy: " : "Source code: ")

    return (
        <>
            <div className="aboutme-examples-title">Przykłady moich stron:</div>
            <div className="aboutme-examples-wrap">
                {examples.map((item, index) => (
                    <div key={index} className="aboutme-examples-card">
                        <a href={item.gitpage}>
                            <img src={item.src} alt={item.alt} />
                        </a>
                        <div className="aboutme-examples-description">
                            <div>{item[lang]}</div>
                            <div>
                                <span className="aboutme-examples-textsourcecode">{textForCard}</span>
                                <a href={item.github}>{item.github}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AboutMeExamples;