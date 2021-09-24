/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from '../style/StacksList.module.css';

const StacksList = () => {
  return (
    <div className="container mx-auto mt-4">
      <h1 className={style.title}>Stacks</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{width: "18rem"}}>
            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn2 mr-2">
                <i className="fas fa-link" />
                {' '}
                Learn More...
              </a>
            </div>
          </div>
        </div> 
      </div> 
    </div>  
  );
};

export default StacksList;