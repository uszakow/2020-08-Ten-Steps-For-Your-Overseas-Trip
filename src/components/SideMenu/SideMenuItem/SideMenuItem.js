import React from 'react';
import './SideMenuItem.scss';

import { NavLink } from 'react-router-dom';

const SideMenuItem = props => {
    const indexToLocalStorage = index => {
        localStorage.setItem("indexOfLesson", JSON.stringify(index));
        props.closeMenu();
    }

    const { index } = props;
    const lang = props.lang;

    return (
        <NavLink
            to={`/10-steps/${index}`}
            className="sidemenu-item"
            activeClassName="sidemenu-item-active"
            onClick={() => indexToLocalStorage(index)}>
            {props.name[lang]}
        </NavLink>
    )
}

export default SideMenuItem;