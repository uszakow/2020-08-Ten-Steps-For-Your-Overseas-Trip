import React from 'react';
import './Language.scss';

import polish from '../../img/Languages/polish.svg'
import english from '../../img/Languages/english.svg'

const Language = props => {
    const lang = props.lang;
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
        <button
            className="language"
            onClick={() => changeLanguage(lang)}>
            <img src={flag} alt="language" width="60" height="40" />
        </button>
    )
}

export default Language;