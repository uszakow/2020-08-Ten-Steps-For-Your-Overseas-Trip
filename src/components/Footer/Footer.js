import React from 'react';
import './Footer.scss';

import photo from '../../img/Footer/uszakow.png';

const author = {
    pol: "Autor projektu",
    eng: "Author of the project"
}

const Footer = props => {
    const lang = props.lang;

    return (
        <footer className="footer-wrap">
            <img src={photo} alt="Uszakow" width="100" />
            <div>
                <div className="footer-title">{author[lang]}:</div>
                <div className="footer-title">Paweł Uszakow</div>
                <div>GitHub: <a href="https://github.com/uszakow">https://github.com/uszakow</a></div>
                <div>LinkedIn: <a href="https://www.linkedin.com/in/p-uszakow">https://www.linkedin.com/in/p-uszakow</a></div>
            </div>
        </footer>
    )
}

export default Footer;