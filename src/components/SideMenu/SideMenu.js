import React, { Component } from 'react';
import './SideMenu.scss';

import lessons from './../../lessons';
import SideMenuItem from './SideMenuItem/SideMenuItem';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: null,
        }
    }

    isMobile = () => {
        this.setState({
            isMobile: window.innerWidth < 992
        })
    }

    componentDidMount() {
        this.isMobile();
        window.addEventListener("resize", this.isMobile);
    }
    render() {
        const { changeMenu, isActive, lang } = this.props;

        const menu = this.state.isMobile ? "sidemenu-mobile" : "sidemenu-desctop";
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
}

export default SideMenu;