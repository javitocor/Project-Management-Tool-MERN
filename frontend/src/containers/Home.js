/* eslint-disable react/forbid-prop-types */
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
import countProjectStatus from '../helpers/countProjectStatus';
import getPercentage from '../helpers/getPercentage';
import style from '../style/Home.module.css';

function Home(props) {
  const {getAll, projectsList, stacksList} = props;

  useEffect(() => {
    (async () => {
      try {  
        await getAll('projects');
        await getAll('stacks');
      } catch (error) {
        console.log(error)
      }           
    })();
  }, []);

  return projectsList.length === 0 || stacksList.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
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
                      <h3>{projectsList.length}</h3>
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
                      <h3>{stacksList.length}</h3>
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
                      <h3>2019</h3>
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
                      <h3 className="text-primary">{countProjectStatus(projectsList, 'Production')}</h3>
                      <span>In Production</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-book-open primary font-large-2 float-right" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style={{height: "7px"}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: getPercentage(countProjectStatus(projectsList, 'Production'), projectsList.length)}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
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
                      <h3 className="text-warning">{countProjectStatus(projectsList, 'Development')}</h3>
                      <span>In Development</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-bubbles warning font-large-2 float-right" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style={{height: "7px"}}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: getPercentage(countProjectStatus(projectsList, 'Development'), projectsList.length)}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
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
                      <h3 className="text-success">{countProjectStatus(projectsList, 'Standby')}</h3>
                      <span>In Standby</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-cup success font-large-2 float-right" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style={{height: "7px"}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: getPercentage(countProjectStatus(projectsList, 'Standby'), projectsList.length)}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" />
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
            <HorizontalBarChart stacks={stacksList} projects={projectsList} />
          </div>
          <div className="col-4 mt-3 mb-1">
            <DonutChart projects={projectsList} />
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

Home.propTypes = {
  projects: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    projectsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  stacks: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    stacksList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAll: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  projects: {
    error: state.projects.error,
    projectsList: state.projects.projectsList,
    pending: state.projects.pending,
  },
  stacks: {
    error: state.stacks.error,
    stacksList: state.stacks.stacksList,
    pending: state.stacks.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAll: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);