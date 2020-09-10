import React from 'react';
import './Page404.scss';

import { Link } from 'react-router-dom';

const content = {
    title: {
        pol: "Błąd 404",
        eng: "404 Error"
    },
    text1: {
        pol: "Ta strona nie istnieje. Możesz ",
        eng: "This page does not exist. You can "
    },
    link1: {
        pol: "przejść na stronę startową",
        eng: "go to the start page"
    },
    text2: {
        pol: " albo ",
        eng: " or "
    },
    link2: {
        pol: "wrócić do aktualnego kroku",
        eng: "go back to the current step"
    }
}

const Page404 = props => {
    const { lang } = props;

    let indexOfLesson = JSON.parse(localStorage.getItem("indexOfLesson"));
    if (!indexOfLesson) indexOfLesson = 0;

    return (
        <div>
            <h1>{content.title[lang]}</h1>
            <p>
                {content.text1[lang]}
                <Link to="/" className="page404-link">{content.link1[lang]}</Link>
                {content.text2[lang]}
                <Link to={`/10-steps/${indexOfLesson}`} className="page404-link">{content.link2[lang]}</Link>
                .
            </p>
        </div>
    )
}

export default Page404;