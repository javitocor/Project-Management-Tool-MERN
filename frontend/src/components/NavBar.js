/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import generateKey from "../helpers/generateKey";
import navbar from '../style/Navbar.module.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {

    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Project Management Tool</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                  <div className="container-fluid">
          
                    <button type="button" id="sidebarCollapse" className="btn btn-dark" onClick={()=>this.toggleClass()}>
                      <i className="fas fa-align-left" />
                    </button>
          
                  </div>
                </nav>
              </li>          
            </ul>
            <div className="navbar-nav dropdown dropleft">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Username
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  key={generateKey('profile')}
                  to='/profile'
                  className='dropdown-item'
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  Profile
                </Link>
                <Link
                  key={generateKey('projects')}
                  to='/projects'
                  className='dropdown-item'
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  Projects
                </Link>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">LogOut</a>
              </div>
            </div>
          </div>
        </nav>
        <div className={navbar.wrapper}>
          <nav id={navbar.sidebar} className={`bg-dark ${this.state.active ? "active": null}`} style={{ margin: this.state.active ? '0 0 0 -250px': '0'}}> 
            <div className={`${navbar.sidebarheader} bg-dark`}>
              <h3>Project Management</h3>
            </div>
  
            <ul className={`list-unstyled ${navbar.components} navbar-nav`}>
              <p>
                <Link
                  key={generateKey('home')}
                  to='/'
                  className=''
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  Dashboard
                </Link>
              </p>
              <li className="">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Projects</a>
                <ul className="collapse list-unstyled nav-item" id="homeSubmenu">                  
                  <li>
                    <Link
                      to='/projects'
                      className=''
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                    >
                      My Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: `/projects/create`,
                        state: { project: null, type:'create' }
                      }}
                      className=''
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                    >
                      Create Project
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Stacks</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <Link
                      to='/stacks'
                      className=''
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                    >
                      Stacks
                    </Link>
                  </li>                  
                  <li>
                    <Link
                      to={{
                        pathname: `/stacks/create`,
                        state: { stack: null, type:'create' }
                      }}
                      className=''
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                    >
                      Create Stack
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Collaborations</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div id={navbar.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    ) 
  } 
};

export default NavBar;