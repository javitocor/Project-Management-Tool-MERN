/* eslint-disable array-callback-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import HorizontalBarChart from '../components/HorizontalBarChart';
import DonutChart from '../components/DonutChart';
import { AllCall } from '../helpers/apiCalls';
import countProjectStatus from '../helpers/countProjectStatus';
import getPercentage from '../helpers/getPercentage';
import style from '../style/Home.module.css';

function Home(props) {
  const {getAll} = props;
  const [featured, setFeatured] = useState([])
  const [projects, setProjects] = useState([])
  const [ stacks, setStacks] = useState([]);

  useEffect(() => {
    (async () => {
      try {  
        const data = await getAll('projects');
        const data2 = await getAll('stacks');
        setStacks(data2)
        setProjects(data)
        setFeatured(data.sort(() => .5 - Math.random()).slice(0, 2))        
      } catch (error) {
        console.log(error)
      }           
    })();
  }, [getAll]);
  
  return projects.length === 0 || stacks.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
    <div className={`${style.greybg} container-fluid`}>
      <section id="minimal-statistics">
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h2 className="text-uppercase text-muted">Dashboard</h2>
            <p>Dashboard Statistics</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12"> 
            <div className={`${style.card2} card`}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="fas fa-project-diagram fa-2x text-primary" />
                    </div>
                    <div className="media-body text-right">
                      <h3>{projects.length}</h3>
                      <span>Total Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className={`${style.card2} card`}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="fas fa-laptop-code fa-2x text-info" />
                    </div>
                    <div className="media-body text-right">
                      <h3>{stacks.length}</h3>
                      <span>Technologies Used</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className={`${style.card2} card`}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="fas fa-user-tie fa-2x text-info" />
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
            <div className={`${style.card2} card`}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="fas fa-glasses fa-2x text-secondary" />
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
            <div className={`${style.card2} card`}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-success">{countProjectStatus(projects, 'Production')}</h3>
                      <span>In Production</span>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-network-wired fa-2x text-success" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style={{height: "7px"}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: getPercentage(countProjectStatus(projects, 'Production'), projects.length)}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className={`${style.card2} card`}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-primary">{countProjectStatus(projects, 'Development')}</h3>
                      <span>In Development</span>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-terminal fa-2x text-primary" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style={{height: "7px"}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: getPercentage(countProjectStatus(projects, 'Development'), projects.length)}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="col-xl-4 col-sm-6 col-12">
            <div className={`${style.card2} card`}>
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-warning">{countProjectStatus(projects, 'Standby')}</h3>
                      <span>In Standby</span>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-pause fa-2x text-warning" />
                    </div>
                  </div>
                  <div className="progress mt-1 mb-0" style={{height: "7px"}}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: getPercentage(countProjectStatus(projects, 'Standby'), projects.length)}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" />
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
            <HorizontalBarChart stacks={stacks} projects={projects} />
          </div>
          <div className="col-4 mt-3 mb-1">
            <DonutChart projects={projects} />
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
          <div className="col-12 mb-2">
            <div id={style.moviecardlist}>
              {featured.map(project => (        
                <div className={style.moviecard}>
                  <div className={style.coloroverlay}>
                    <div className={style.movieshare}>
                      <a className={style.movieshareicon} href="#">
                        <i className="fas fa-code-branch" />
                      </a>
                      <a className={style.movieshareicon} href="#">
                        <i className="fas fa-server" />
                      </a>
                      <a className={style.movieshareicon} href="#">
                        <i className="fas fa-download" />
                      </a>
                    </div>
                    <div className={style.moviecontent}>
                      <div className={style.movieheader}>
                        <h1 className={style.movietitle}>{project.name}</h1>
                        <h4 className={style.movieinfo}>{project.stack.map(stack=>stack.name).join(' ')}</h4>
                      </div>
                      <p className={style.moviedesc}>
                        {project.description.substring(0, 38)}
                        ...
                      </p>
                      <Link
                        to={{
                        pathname: `/project/${project.name}`,
                        state: { id: project._id }
                      }}
                        className={`${style.btn2} ${style.btnoutline} btn-outline`}
                        id="list-home-list"
                        data-toggle="list"
                        role="tab"
                        aria-controls="home"
                      >
                        Check it out
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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