/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { SingleCall } from '../helpers/apiCalls';
import style from '../style/StackDetail.module.css'

const StackDetail = (props) => {
  const {stack, getStack, location } = props;
  const { id } = location.state;

  useEffect(() => {
    (async () => {
      try {  
        await getStack('stacks', id);
      } catch (error) {
        console.log(error)
      }           
    })();
  }, []);

  return stack.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
    <div className="container py-3">
      <div className={`${style.title} text-center mt-5 mb-5"`}>Stack</div>
      <div className="card mt-4">
        <div className="row ">
        
          <div className="col-md-7 px-3">
            <div className={`${style.cardblock} px-6`}>
              <h4 className="card-title">{stack.name}</h4>
              <p className="card-text">
                {stack.description}
              </p>
              <a href={stack.link ? stack.link : "#"} className={`mt-4 ${style.btn2}`}>Read More</a>
            </div>
          </div>
          <div className="col-md-5">
            <img className="d-block w-100" src="https://picsum.photos/150?image=380" alt="" />
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