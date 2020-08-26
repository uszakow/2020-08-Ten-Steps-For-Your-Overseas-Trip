import React from 'react';
import './SideMenuItem.scss';

import { NavLink } from 'react-router-dom';

const SideMenuItem = (props) => {
    const indexToLocalStorage = index => {
        localStorage.setItem("indexOfLesson", JSON.stringify(index));
    }
    const { index } = props;

    return (
        <NavLink
            to={`/10-steps/${index}`}
            className="sidemenu-item"
            activeClassName="sidemenu-item-active"
            onClick={props.closeMenu}
            onClick={() => indexToLocalStorage(index)}>
            {props.name.pol}
        </NavLink>
    )
}

export default SideMenuItem;