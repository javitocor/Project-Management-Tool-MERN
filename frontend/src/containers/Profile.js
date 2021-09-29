/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
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
import style from '../style/Profile.module.css';

const Profile = (props) => {
  const { getAllProfiles} = props;
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {  
        const data = await getAllProfiles('profile');
        setUser(data[0])
      } catch (error) {
        console.log(error)
      }           
    })();
  }, [getAllProfiles]);
  
  return user === {} ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
    <div className={`container-fluid ${style.bggrey}`}>
      <div className="row">
        <div className={`${style.profilenav} col-md-3`}>
          <div className={style.panel}>
            <div className={`${style.userheading} round`}>
              <a href="#">
                <img src={user.avatar ? user.avatar : 'http://localhost:8000/public/images/placeholder.png'} alt="" />
              </a>
              <h1 className="mt-2">
                {user.firstname} 
                {' '}
                {user.lastname}
              </h1>
              <p className="text-white">{user.email}</p>
            </div>
          
            <ul className="list-group">
              <li className="list-group-item">
                <a href={user.socialMedia ? user.socialMedia.Github : '#'} target="_blank"> 
                  {' '}
                  <i className="fab fa-github" />
                  {' '}
                  Github
                  {' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href={user.socialMedia ? user.socialMedia.Angelist : '#'} target="_blank"> 
                  {' '}
                  <i className="fab fa-angellist" />
                  {' '}
                  Angelist
                  {' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href={user.socialMedia ? user.socialMedia.Linkedin : '#'} target="_blank"> 
                  {' '}
                  <i className="fab fa-linkedin" />
                  {' '}
                  Linkedin
                  {' '}
                </a>
              </li>
              <li className="list-group-item"> 
                <Link
                  to={{
                        pathname: `/profile/update`,
                        state: { user }
                      }}
                  className=''
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  <i className="fas fa-user-edit" />
                  Edit Profile
                </Link> 
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.profileinfo} col-md-9`}>
               
          <div className={style.panel}>
            <div className={style.biographheading}>
              {user.about}                        
            </div>
            <div className={style.biographinfo}>
              <h1>BioGraphy</h1>
              <div className="row">
                <div className={style.biorow}>
                  <p>
                    <span>Name </span>
                    {user.firstname} 
                    {' '}
                    {user.lastname}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Birthday </span>
                    {user.dob ? user.dob.substring(0, 10) : ''}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Country </span>
                    {user.country}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>City</span>
                    {user.city}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Email </span>
                    {user.email}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Gender </span>
                    {user.gender}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Work Status </span>
                    {user.work_status}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Phone </span>
                    {user.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.biographinfo}>
              <h1 className={`${style.skillsheader} mb-4`}>Highlights</h1>
              <div className="row">
                <div className="col-md-6">
                  <div className={`${style.card2} card ${style.lbgbluedark}`}>
                    <div className={`${style.cardstatistic3} p-4`}>
                      <div className={`${style.cardicon} ${style.cardiconlarge}`}><i className="fas fa-users fa-8x" /></div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Customers</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            263
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            9.23%
                            {' '}
                            <i className="fa fa-arrow-up" />
                          </span>
                        </div>
                      </div>
                      <div className="progress mt-1" data-height="8" style={{height: "8px"}}>
                        <div className={`progressbar ${style.lbgcyan}`} role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "25%"}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`card ${style.card2} ${style.lbgcherry}`}>
                    <div className={`${style.cardstatistic3} p-4`}>
                      <div className={`${style.cardicon} ${style.cardiconlarge}`}><i className="fas fa-compress-arrows-alt fa-8x" /></div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">New Collaborations</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            145
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            12.5%
                            {' '}
                            <i className="fa fa-arrow-up" />
                          </span>
                        </div>
                      </div>
                      <div className="progress mt-1" data-height="8" style={{height: "8px"}}>
                        <div className={`progressbar ${style.lbgcyan}`} role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "25%"}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`card ${style.card2} ${style.lbggreendark}`}>
                    <div className={`${style.cardstatistic3} p-4`}>
                      <div className={`${style.cardicon} ${style.cardiconlarge}`}><i className="fas fa-ticket-alt fa-8x" /></div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Git Commits</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            1578
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            10%
                            {' '}
                            <i className="fa fa-arrow-up" />
                          </span>
                        </div>
                      </div>
                      <div className="progress mt-1" data-height="8" style={{height: "8px"}}>
                        <div className={`progressbar ${style.lbggreen}`} role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "25%"}} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`card ${style.card2} ${style.lbgorangedark}`}>
                    <div className={`${style.cardstatistic3} p-4`}>
                      <div className={`${style.cardicon} ${style.cardiconlarge}`}><i className="far fa-smile-beam fa-8x" /></div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Customer Satisfaction</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            98%
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            2.5%
                            {' '}
                            <i className="fa fa-arrow-up" />
                          </span>
                        </div>
                      </div>
                      <div className="progress mt-1" data-height="8" style={{height: "8px"}}>
                        <div className={`progressbar ${style.lbgorange}`} role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "25%"}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  profiles: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    profilesList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profiles: {
    error: state.profiles.error,
    profilesList: state.profiles.profilesList,
    pending: state.profiles.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllProfiles: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);