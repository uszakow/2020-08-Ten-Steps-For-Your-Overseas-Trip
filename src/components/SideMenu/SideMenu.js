import React, { Component } from 'react';
import './SideMenu.scss';

import lessons from './../../Lessons';
import SideMenuItem from './SideMenuItem/SideMenuItem';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isMobile: null,
        }
    }

    activeMenu = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
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
        const menu = this.state.isMobile ? "sidemenu-mobile" : "sidemenu-desctop";
        const hidden = this.state.isActive ? "sidemenu-mobile-hidden" : "sidemenu-mobile-active";



        return (
            <div className={`sidemenu-wrap ${menu} ${hidden}`}>
                {
                    lessons.map((item, index) => (
                        <SideMenuItem
                            key={index}
                            name={item.name}
                            index={index}
                            closeMenu={this.activeMenu} />
                    ))
                }
                < button className="sidemenu-control" onClick={this.activeMenu}>
                    <span />
                </button >
            </div >
        )
    }
}

export default SideMenu;