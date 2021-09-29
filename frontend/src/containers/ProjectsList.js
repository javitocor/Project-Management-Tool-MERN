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
  const [infoProjects, setInfoProjects] = useState([])

  useEffect(() => {
    (async () => {
      try {  
       const data =  await getAllProjects('projects');
       setInfoProjects(data);
      } catch (error) {
        console.log(error)
      }           
    })();
  }, [getAllProjects]);

  return infoProjects.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
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
            {infoProjects.map(project => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src={project.image ? project.image : 'http://localhost:8000/public/images/placeholder.png'} data-holder-rendered="true" />
                  <div className="card-body">
                    <p className="card-text">{project.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link 
                          className="btn btn-sm btn-outline-secondary"
                          id="list-home-list"
                          data-toggle="list"
                          role="tab"
                          aria-controls="home"
                          to={{
                            pathname: `/project/${project.name}`,
                            state: {
                              id: project._id,
                            },
                          }}
                        >
                          Learn More
                        </Link>
                      </div>
                      <span className="badge badge-success">{project.status}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    {project.stack.map(stack=>(
                      <Link
                        key={stack.description}
                        to={{
                        pathname: `/stack/${stack.name}`,
                        state: {
                          id: stack._id,
                        },
                      }}
                        className="badge badge-pill badge-secondary mr-1"
                        id="list-home-list"
                        data-toggle="list"
                        role="tab"
                        aria-controls="home"
                      >
                        {stack.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div> 
            ))}
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
    error: state.projects.error,
    projectsList: state.projects.projectsList,
    pending: state.projects.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllProjects: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
