/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
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
    console.log('hello')
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
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">My Projects</a>
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
              <p>Dashboard</p>
              <li className="">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled nav-item" id="homeSubmenu">
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <a href="#">Page 1</a>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="content">
            {this.props.children}
          </div>
        </div>
      </div>
    ) 
  } 
};

export default NavBar;