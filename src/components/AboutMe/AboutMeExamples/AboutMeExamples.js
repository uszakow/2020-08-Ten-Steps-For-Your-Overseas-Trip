import React from 'react';
import './AboutMeExamples.scss';

import { title, examples } from './examples';



const AboutMeExamples = props => {
    const { lang } = props;
    const textForCard = (lang === "pol" ? "Kod źródłowy: " : "Source code: ")

    return (
        <>
            <div className="aboutme-examples-title">{title[lang]}</div>
            <div className="aboutme-examples-wrap">
                {examples.map((item, index) => (
                    <div key={index} className="aboutme-examples-card">
                        <a href={item.gitpage} target="_blank" rel="noopener noreferrer">
                            <img src={item.src} alt={item.alt} />
                        </a>
                        <div className="aboutme-examples-description">
                            <div>{item[lang]}</div>
                            <div>
                                <span className="aboutme-examples-textsourcecode">{textForCard}</span>
                                <a href={item.github} target="_blank" rel="noopener noreferrer">{item.github}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AboutMeExamples;