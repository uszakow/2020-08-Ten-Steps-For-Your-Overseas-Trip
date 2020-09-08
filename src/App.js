import React, { Component } from 'react';
import './App.scss';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Banner from './components/Banner/Banner';
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './components/Home/Home';
import Lesson from './components/Lesson/Lesson';
import HowToUse from './components/HowToUse/HowToUse';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import ButtonUp from './components/ButtonUp/ButtonUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: null,
      isSideMenuOpen: false,
      isMobileSideMenu: null,
      isMobileLesson: null
    }
  }

  closeSideMenu = () => {
    this.setState({
      isSideMenuOpen: false
    })
  }
  changeSideMenu = () => {
    this.setState(prevState => ({
      isSideMenuOpen: !prevState.isSideMenuOpen
    }))
  }
  changeLanguage = () => {
    const lang = localStorage.getItem("lang");
    this.setState({
      lang: lang
    })
  }
  isMobile = () => {
    this.setState({
      isMobileSideMenu: window.innerWidth < 768,
      isMobileLesson: window.innerWidth < 1200
    })
  }

  componentDidMount() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
  }
  render() {
    if (!localStorage.getItem("indexOfLesson")) {
      localStorage.setItem("indexOfLesson", "0");
    }
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "pol");
    }
    const lang = localStorage.getItem("lang");
    const { isSideMenuOpen, isMobileSideMenu, isMobileLesson } = this.state;

    return (
      <Router>
        <div className="app-wrap">
          <Banner returnLanguage={this.changeLanguage} lang={lang} />
          <TopMenu closeSideMenu={this.closeSideMenu} lang={lang} />

          <div className="app-container">
            <SideMenu
              changeMenu={this.changeSideMenu}
              isActive={isSideMenuOpen}
              isMobile={isMobileSideMenu}
              lang={lang} />

            <main className="app-main">
              <Switch>                
                <Redirect from="/index.html" to="/" />
                <Redirect exact from="/10-steps" to="/" />
                <Route exact path="/" render={() => <Home lang={lang} />} />
                <Route path="/10-steps/:index" render={props => <Lesson lang={lang} isMobile={isMobileLesson} {...props} />} />
                <Route path="/how-to-use" render={() => <HowToUse lang={lang} />} />
                <Route path="/about-me" render={() => <AboutMe lang={lang} />} />
                <Route>
                  <h1>Strona 404</h1>
                </Route>
              </Switch>
            </main>
          </div>

          <Footer lang={lang} />
          <ButtonUp />
        </div>
      </Router >
    );
  }
}

export default App;