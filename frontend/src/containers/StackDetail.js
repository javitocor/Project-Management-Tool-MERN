/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { SingleCall } from '../helpers/apiCalls';
import style from '../style/StackDetail.module.css'

const StackDetail = (props) => {
  const {stack, getStack, location } = props;
  const [stackInfo, setStackInfo] = useState({});
  

  useEffect(() => {
    (async () => {
      try {  
        const { id } = location.state;
        const data = await getStack('stacks', id);
        setStackInfo(data);
      } catch (error) {
        console.log(error)
      }           
    })();
  }, []);

  return stackInfo.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
    <div className={`py-3 ${style.container2}`}>
      <div className={`${style.title} text-center mt-5 mb-5"`}>{stackInfo.name}</div>
      <div className={`${style.card2} card mt-4`}>
        <div className="row ">
        
          <div className={`${style.colbg} px-3 col-md-7`}>
            <div className={`${style.cardblock} px-6`}>
              <h4 className="card-title">
                Since
                {' '}
                {stackInfo.released_year}
              </h4>
              <p className="card-text">
                {stackInfo.description}
              </p>
              <a href={stackInfo.link ? stackInfo.link : "#"} className={`mt-4 ${style.btn2} mr-3`}>Read More</a>
              <Link
                to={{
                        pathname: `/stack/${stackInfo.name}/update`,
                        state: { stack: stackInfo, type:'update' }
                      }}
                className={`mt-4 ${style.btn2}`}
                id="list-home-list"
                data-toggle="list"
                role="tab"
                aria-controls="home"
              >
                Edit Project
              </Link>
            </div>
          </div>
          <div className={`col-md-5 ${style.colpad}`}>
            <img className="d-block w-100" src={stackInfo.logo} alt="" />
          </div>
        </div>
        
      </div>

    </div>
  );
};

StackDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
  stacks: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    stack: PropTypes.object,
  }).isRequired,
  getStack: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stacks: {
    error: state.stacks.error,
    stack: state.stacks.stack,
    pending: state.stacks.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getStack: SingleCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StackDetail);