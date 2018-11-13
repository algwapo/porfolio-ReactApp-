import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import Log from './Login/index';
import Todo from './todoApp/index';
import showTodo from './todoApp/showcodes';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/Login/index" component={Log} />
    <Route path="/todoApp/index" component={Todo} />
    <Route path="/todoApp/showcodes" component={showTodo} />
  </Switch>
)

export default Main;
