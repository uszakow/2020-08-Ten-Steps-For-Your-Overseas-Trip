import React from 'react';
import './Banner.scss';

import { Link } from 'react-router-dom';

import Language from '../Language/Language';
import banner from '../../img/Banner/banner.jpg';

const text = {
    pol: "Tylko dziesięć kroków przed Twoim zagranicznym wyjazdem!",
    eng: "Only ten steps before your overseas trip!",
}

const Banner = props => {
    const lang = props.lang;

    return (
        <header className="banner-wrap">
            <div className="banner-content">
                <Link to="/" className="banner-link">
                    <img src={banner} alt="plane" className="banner-img" />
                    <div className="banner-text">{text[lang]}</div>
                </Link>
                <Language lang={lang} returnLanguage={props.returnLanguage} />
            </div>
        </header>
    )
}

export default Banner;