/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { SingleCall } from '../helpers/apiCalls';
import style from '../style/Projectdetail.module.css';


const ProjectDetail = (props) => {
  const {project, getProject, location } = props;
  const { id } = location.state;

  useEffect(() => {
    (async () => {
      try {  
        await getProject('projects', id);
      } catch (error) {
        console.log(error)
      }           
    })();
  }, [id]);

  return project.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
    <div className={`container ${style.containercontact}`}>
      <div className={`row ${style.decordefault}`}>
        <div className="col-md-12">
          <div className={style.contact}>
            <div className={style.controls}>
              <img src="https://via.placeholder.com/900x320/FF69B4/000000" alt="cover" className={style.cover} />
                      
            </div>
            
            <div className="row">
              <div className="col-lg-4 col-md-4 col-md-5 col-xs-12">
                <div className="row">
                  <div className="col-3">
                    Name of the project:
                  </div>
                  <div className="col-9">
                    {project.name}
                  </div>
                  <div className="col-3">
                    Year:
                  </div>
                  <div className="col-9">
                    {project.year}
                  </div>
                  <div className="col-3">
                    Status:
                  </div>
                  <div className="col-9">
                    {project.status}
                  </div>                
                  {project.links.map(link=>{   
                    <>                 
                      <div className="col-3">
                        Github:
                      </div>  
                      <div className="col-9">
                        {link}
                      </div>
                    </>
                  })}                  
                  <div className="col-3">
                    Stack:
                  </div>
                  <div className="col-9">
                    <ul>
                      {project.stack.map(stack=>{
                        <li>{stack.name}</li>
                      })}
                    </ul>
                  </div>
                  <div className="col-12">
                    <Link
                      to={{
                        pathname: `/project/${project.name}/update`,
                        state: { project, type:'update' }
                      }}
                      className='btn btn-outline-secondary'
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                    >
                      Edit Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 col-xs-12">
                <p className={style.contactdescription}>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
  projects: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    project: PropTypes.object,
  }).isRequired,
  getProject: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  projects: {
    error: state.projects.error,
    project: state.projects.project,
    pending: state.projects.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProject: SingleCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);