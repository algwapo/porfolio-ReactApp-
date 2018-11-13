import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import { Cell } from 'react-mdl';

import './style.css';

class log extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="Apps">
          <div className="App__Aside">
          <Cell col={6} className="App__Aside">
            <img
              src="https://img.icons8.com/ios/1600/fingerprint.png"
              alt="avatar"
              style={{height: '550px'}}
               />
          </Cell>
          </div>
          <div className="App__Form">

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default log;
