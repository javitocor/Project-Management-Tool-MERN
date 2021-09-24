/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from '../style/StackDetail.module.css'

const StackDetail = () => {
  return (
    <div className="container py-3">
      <div className={`${style.title} text-center mt-5 mb-5"`}>Stack</div>
      <div className="card mt-4">
        <div className="row ">
        
          <div className="col-md-7 px-3">
            <div className={`${style.cardblock} px-6`}>
              <h4 className="card-title">Horizontal Card with Carousel - Bootstrap 4 </h4>
              <p className="card-text">
                The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
              </p>
              <a href="#" className={`mt-4 ${style.btn2}`}>Read More</a>
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

export default StackDetail;