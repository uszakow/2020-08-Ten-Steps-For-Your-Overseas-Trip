import React, { Component } from 'react';
import './ButtonUp.scss';

import up from '../../img/ButtonUp/up.svg';

class ButtonUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: true
        }
    }

    isTop = () => {
        if (window.pageYOffset > 200) {
            this.setState({
                top: false
            })
        } else {
            this.setState({
                top: true
            })
        }
    }
    scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    componentDidMount() {
        this.isTop();
        window.addEventListener("scroll", this.isTop);
    }

    render() {
        const { top } = this.state;
        const css = (top === false ? "buttonup-show" : "");

        return (
            <button className={"buttonup-wrap " + css} onClick={this.scrollUp}>
                <img src={up} alt="Up" width="30"/>
            </button>
        )
    }
}

export default ButtonUp;