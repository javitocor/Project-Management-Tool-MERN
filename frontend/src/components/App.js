/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../containers/Home';
import StacksList from '../containers/StacksList';
import Profile from '../containers/Profile';
import ProjectDetail from '../containers/ProjectDetail';
import StackDetail from '../containers/StackDetail';
import ProjectsList from '../containers/ProjectsList';
import style from '../style/App.module.css';

const App = () => (
  /* <Router>
    <Switch>
      <>
        <div className={style.content}>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/stacks" component={StacksList} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/project/:name" component={ProjectDetail} />
          <Route exact path="/stack/:name" component={StackDetail} />
        </div>
      </>
    </Switch>
  </Router> */
  <NavBar>
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectsList} />
          <Route exact path="/stacks" component={StacksList} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/project/:name" component={ProjectDetail} />
          <Route exact path="/stack/:name" component={StackDetail} />
        </>
      </Switch>
    </Router>
  </NavBar>
);

export default App;