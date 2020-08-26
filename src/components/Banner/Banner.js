import React from 'react';
import './Banner.scss';

import { Link } from 'react-router-dom';

import banner from '../../img/Banner/banner.jpg';
import polish from '../../img/Languages/polish.svg'
import english from '../../img/Languages/english.svg'

const text = {
    pol: "Tylko dziesięć kroków przed Twoim zagranicznym wyjazdem!",
    eng: "Only ten steps before your overseas trip!",
}

const Banner = props => {
    const lang = localStorage.getItem("lang");
    const flag = (lang === "pol" ? polish : english);

    const changeLanguage = lang => {        
        if (lang === "pol") {
            localStorage.setItem("lang", "eng");
        } else if (lang === "eng") {
            localStorage.setItem("lang", "pol");
        }
        props.returnLanguage();
    }

    return (
        <header className="banner-wrap">
            <div className="banner-content">
                <Link to="/" className="banner-link">
                    <img src={banner} alt="plane" className="banner-img" />
                    <div className="banner-text">{text[lang]}</div>
                </Link>
                <button
                    className="banner-lang"
                    onClick={() => changeLanguage(lang)}>
                    <img src={flag} alt="language" width="60" height="40" />
                </button>
            </div>
        </header>
    )
}

export default Banner;