/* eslint-disable array-callback-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { AllCall } from '../helpers/apiCalls';
import style from '../style/ProjectsList.module.css';

const ProjectsList = (props) => {
  const {projectsList, getAllProjects} = props;

  useEffect(() => {
    (async () => {
      try {  
        const data = await getAllProjects('projects');
      } catch (error) {
        console.log(error)
      }           
    })();
  }, []);

  return projectsList.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
    <main role="main">

      <section className={`jumbotron text-center ${style.jumbo}`}>
        <div className="container">
          <h1 className="jumbotron-heading">All my projects</h1>
          <p className="lead text-white">All my projects at one click! Enjoy my creations and do not hesitate to contact me if you need a collaboration!</p>
              
        </div>
      </section>
    
      <div className="album py-5 bg-light">
        <div className="container">
    
          <div className="row">
            {projectsList.map(project => {
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c18f48e08%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c18f48e08%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                  <div className="card-body">
                    <p className="card-text">{project.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Learn More</button>
                      </div>
                      <span className="badge badge-success">{project.status}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    {project.stack.map(stack=>{
                      <Link
                        key={project}
                        to={{
                        pathname: `/stack/${stack.name}`,
                        state: {
                          id: stack._id,
                        },
                      }}
                        className="badge badge-pill badge-secondary"
                        id="list-home-list"
                        data-toggle="list"
                        role="tab"
                        aria-controls="home"
                      >
                        {stack.name}
                      </Link>
                    })}
                  </div>
                </div>
              </div> 
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    projectsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  projects: {
    error: state.items.error,
    projectsList: state.items.itemsList,
    pending: state.items.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllProjects: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
