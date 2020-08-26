import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuOpen: true,
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

  render() {  
    return (
      <Router>
        <div>
          <TopMenu closeSideMenu={this.closeSideMenu} />

          <main className="app-container">
            <SideMenu changeMenu={this.changeSideMenu} isActive={this.state.isSideMenuOpen} />

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
        </div>
      </Router >
    );
  }
}

export default App;