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
  const {profilesList, getAllProfiles} = props;
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
  }, []);

  return profilesList.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100"><Spinner animation="grow" /></div> : (
    <div className={`container-fluid ${style.bggrey}`}>
      <div className="row">
        <div className={`${style.profilenav} col-md-3`}>
          <div className={style.panel}>
            <div className={`${style.userheading} round`}>
              <a href="#">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
              </a>
              <h1>{user.name}</h1>
              <p className="text-white">{user.email}</p>
            </div>
          
            <ul className="list-group">
              <li className="list-group-item">
                <a href={user.socialMedia.Github ? user.socialMedia.Github : '#'} target="_blank"> 
                  {' '}
                  <i className="fab fa-github" />
                  {' '}
                  Github
                  {' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href={user.socialMedia.Angelist ? user.socialMedia.Angelist : '#'} target="_blank"> 
                  {' '}
                  <i className="fab fa-angellist" />
                  {' '}
                  Angelist
                  {' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href={user.socialMedia.Linkedin ? user.socialMedia.Linkedin : '#'} target="_blank"> 
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
                        pathname: `/profile/create`,
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
              <h1>Bio Graph</h1>
              <div className="row">
                <div className={style.biorow}>
                  <p>
                    <span>Name </span>
                    : 
                    {' '}
                    {user.firstname} 
                    {' '}
                    {user.lastname}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Birthday </span>
                    : 
                    {' '}
                    {user.dob}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Country </span>
                    : 
                    {' '}
                    {user.country}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>City</span>
                    : 
                    {' '}
                    {user.city}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Email </span>
                    : 
                    {' '}
                    {user.email}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Gender </span>
                    : 
                    {' '}
                    {user.gender}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Work Status </span>
                    : 
                    {' '}
                    {user.status}
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Phone </span>
                    : 
                    {' '}
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
                  <div className={style.panel}>
                    <div className="">
                      <div className={style.biochart}>
                        <div style={{display:"inline", width:"100px", height:"100px"}}>
                          <canvas width="100" height="100px" />
                          <input className="" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="63" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" />
                        </div>
                      </div>
                      <div className={style.biodesk}>
                        <h4 className={style.terques}>ThemeForest CMS </h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.panel}>
                    <div className="">
                      <div className={style.biochart}>
                        <div style={{display:"inline", width:"100px", height:"100px"}}>
                          <canvas width="100" height="100px" />
                          <input className="" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="63" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" />
                        </div>
                      </div>
                      <div className={style.biodesk}>
                        <h4 className={style.terques}>ThemeForest CMS </h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.panel}>
                    <div className="">
                      <div className={style.biochart}>
                        <div style={{display:"inline", width:"100px", height:"100px"}}>
                          <canvas width="100" height="100px" />
                          <input className="" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="75" data-fgcolor="#96be4b" data-bgcolor="#e8e8e8"  />
                        </div>
                      </div>
                      <div className={style.biodesk}>
                        <h4 className={style.green}>VectorLab Portfolio</h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.panel}>
                    <div className="">
                      <div className={style.biochart}>
                        <div style={{display:"inline", width:"100px", height:"100px"}}>
                          <canvas width="100" height="100px" />
                          <input className="" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="50" data-fgcolor="#cba4db" data-bgcolor="#e8e8e8"  />
                        </div>
                      </div>
                      <div className={style.biodesk}>
                        <h4 className={style.purple}>Adobe Muse Template</h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
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