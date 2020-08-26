import React from 'react';
import './TopMenu.scss';

import { NavLink } from 'react-router-dom';

const TopMenu = (props) => {
    const { closeSideMenu } = props;

    return (
        <div className="topmenu-wrap">
            <NavLink
                to="/10-steps/0"
                activeClassName="topmenu-item-active"
                isActive={(match, location) => {
                    const isHere = (/\/10-steps\/\d+/.test(location.pathname));
                    return isHere;
                }}>10 kroków</NavLink>
            <NavLink
                to="/how-use"
                activeClassName="topmenu-item-active"
                onClick={closeSideMenu}>jak korzystać</NavLink>
            <NavLink
                to="/about-me"
                activeClassName="topmenu-item-active"
                onClick={closeSideMenu}>o mnie</NavLink>
        </div >
    )
}

export default TopMenu;