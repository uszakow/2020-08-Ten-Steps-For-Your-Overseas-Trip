import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Banner from './components/Banner/Banner';
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuOpen: false,
      lang: null,
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

  render() {
    if (!localStorage.getItem("indexOfLesson")) {
      localStorage.setItem("indexOfLesson", "0");
    }
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "pol");
    }
    const lang = localStorage.getItem("lang");

    return (
      <Router>
        <div className="app-wrap">
          <Banner returnLanguage={this.changeLanguage} lang={lang} />
          <TopMenu closeSideMenu={this.closeSideMenu} lang={lang} />

          <main className="app-container">
            <SideMenu changeMenu={this.changeSideMenu} isActive={this.state.isSideMenuOpen} lang={lang} />

            <Switch>
              <Route exact path="/">
                <h1>Home</h1>
              </Route>
              <Route path="/10-steps/:index">
                <div>
                  <h1>10 steps</h1>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                  <div>dafads</div>
                </div>
              </Route>
              <Route path="/how-use">
                <h1>Jak korzystać z programu</h1>
              </Route>
              <Route path="/about-me">
                <h1>O mnie</h1>
              </Route>
              <Route>
                <h1>Strona 404</h1>
              </Route>
            </Switch>
          </main>

          <Footer lang={lang} />
        </div>
      </Router >
    );
  }
}

export default App;