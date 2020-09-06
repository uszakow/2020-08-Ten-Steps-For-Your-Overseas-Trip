import React from 'react';
import './Home.scss';

import content from './content';

const Home = props => {
    const { lang } = props;

    return (
        <div className="home-wrap">
            <h1>{content.title[lang]}</h1>
            {content.paragraphs.map((item, index) => (
                <p key={index}>
                    {item[lang]}
                </p>
            ))}
        </div>
    )
}

export default Home;