import React from 'react';
import './TopMenu.scss';

import { NavLink } from 'react-router-dom';

const items = {
    steps: {
        pol: "10 kroków",
        eng: "10 steps"
    },
    howuse: {
        pol: "jak korzystać",
        eng: "how to use"
    },
    about: {
        pol: "o mnie",
        eng: "about me"
    }
}

const TopMenu = (props) => {
    const { closeSideMenu, lang } = props;

    const indexOfLesson = JSON.parse(localStorage.getItem("indexOfLesson"));

    return (
        <nav className="topmenu-wrap">
            <NavLink
                to={`/10-steps/${indexOfLesson}`}
                activeClassName="topmenu-item-active"
                isActive={(match, location) => {
                    const isHere = (/\/10-steps\/\d+/.test(location.pathname));
                    return isHere;
                }}>{items.steps[lang]}</NavLink>
            <NavLink
                to="/how-to-use"
                activeClassName="topmenu-item-active"
                onClick={closeSideMenu}>{items.howuse[lang]}</NavLink>
            <NavLink
                to="/about-me"
                activeClassName="topmenu-item-active"
                onClick={closeSideMenu}>{items.about[lang]}</NavLink>
        </nav >
    )
}

export default TopMenu;