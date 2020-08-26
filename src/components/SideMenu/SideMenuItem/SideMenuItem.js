import React from 'react';
import './SideMenuItem.scss';

import { NavLink } from 'react-router-dom';

const SideMenuItem = (props) => {
    return (
        <NavLink
            to={`/10-steps/${props.index}`}
            className="sidemenu-item"
            activeClassName="sidemenu-item-active"
            onClick={props.closeMenu}>
            {props.name.pol}
        </NavLink>
    )
}

export default SideMenuItem;