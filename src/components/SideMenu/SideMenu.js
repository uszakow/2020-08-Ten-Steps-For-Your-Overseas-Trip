import React from 'react';
import './SideMenu.scss';

import lessons from './../../lessons';
import SideMenuItem from './SideMenuItem/SideMenuItem';

const SideMenu = props => {
    const { changeMenu, isActive, isMobile, lang } = props;

    const menu = isMobile ? "sidemenu-mobile" : "sidemenu-desctop";
    const hidden = isActive ? "sidemenu-mobile-active" : "sidemenu-mobile-hidden";

    return (
        <nav className={`sidemenu-wrap ${menu} ${hidden}`}>
            {
                lessons.map((item, index) => (
                    <SideMenuItem
                        key={index}
                        name={item.name}
                        index={index}
                        closeMenu={changeMenu}
                        lang={lang} />
                ))
            }
            <button className="sidemenu-control" onClick={changeMenu}>
                <span />
            </button >
        </nav >
    )
}

export default SideMenu;