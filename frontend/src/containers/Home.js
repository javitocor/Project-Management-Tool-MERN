/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { AllCall } from '../helpers/apiCalls';
import style from '../style/Home.module.css';

function Home(props) {
  return (
    <div className="grey-bg container-fluid">
      <section id="minimal-statistics">
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h2 className="text-uppercase text-muted">Dashboard</h2>
            <p>Dashboard Statistics</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12"> 
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="fab fa-github text-primary" />
                    </div>
                    <div className="media-body text-right">
                      <h3>278</h3>
                      <span>Total Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-speech warning font-large-2 float-left" />
                    </div>
                    <div className="media-body text-right">
                      <h3>156</h3>
                      <span>Technologies Used</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-graph success font-large-2 float-left" />
                    </div>
                    <div className="media-body text-right">
                      <h3>64.89 %</h3>
                      <span>Professional Since</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-pointer danger font-large-2 float-left" />
                    </div>
                    <div className="media-body text-right">
                      <h3>423</h3>
                      <span>Total Visits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                                     
        <div className="row">
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-primary">278</h3>
                      <span>In Production</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-book-open primary font-large-2 float-right" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style="height: 7px;">
                    <div className="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-warning">156</h3>
                      <span>In Development</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-bubbles warning font-large-2 float-right" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style="height: 7px;">
                    <div className="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-success">64.89 %</h3>
                      <span>In Standby</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-cup success font-large-2 float-right" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style="height: 7px;">
                    <div className="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>                
        </div>
      </section>
      <section>
        <div className='row'>
          <div className="col-8 mt-3 mb-1">
            <HorizontalBarChart />
          </div>
          <div className="col-4 mt-3 mb-1">
            <DonutChart />
          </div>
        </div>
      </section> 
      <section>
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h4 className="text-uppercase text-muted">Featured Projects</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3 mb-2">
            <div id="movie-card-list">
              <div className="movie-card">
                <div className="color-overlay">
                  <div className="movie-share">
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe87d</i>
                    </a>
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe253</i>
                    </a>
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe80d</i>
                    </a>
                  </div>
                  <div className="movie-content">
                    <div className="movie-header">
                      <h1 className="movie-title">Blade Runner</h1>
                      <h4 className="movie-info">(1982) Sci-Fi, Thriller</h4>
                    </div>
                    <p className="movie-desc">A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.</p>
                    <a className="btn btn-outline" href="#">Watch Trailer</a>
                        
                  </div>
                </div>
              </div>
                        
              <div className="movie-card">
                <div className="color-overlay">
                  <div className="movie-share">
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe87d</i>
                    </a>
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe253</i>
                    </a>
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe80d</i>
                    </a>
                  </div>
                  <div className="movie-content">
                    <div className="movie-header">
                      <h1 className="movie-title">Back to the Future</h1>
                      <h4 className="movie-info">(1985) Adventure, Comedy, Sci-Fi</h4>
                    </div>
                    <p className="movie-desc">Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown. </p>
                    <a className="btn btn-outline" href="#">Watch Trailer</a>
                        
                  </div>
                </div>
              </div>
                        
              <div className="movie-card">
                <div className="color-overlay">
                  <div className="movie-share">
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe87d</i>
                    </a>
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe253</i>
                    </a>
                    <a className="movie-share__icon" href="#">
                      <i className="material-icons">&#xe80d</i>
                    </a>
                  </div>
                  <div className="movie-content">
                    <div className="movie-header">
                      <h1 className="movie-title">Akira</h1>
                      <h4 className="movie-info">(1988) Animation, Action, Drama </h4>
                    </div>
                    <p className="movie-desc">A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop. </p>
                    <a className="btn btn-outline" href="#">Watch Trailer</a>
                        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>           
    </div>
);
}

export default Home;