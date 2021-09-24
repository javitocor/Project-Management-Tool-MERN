/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from '../style/Profile.module.css';

const Profile = () => {
  return (
    <div className={`container-fluid ${style.bggrey}`}>
      <div className="row">
        <div className={`${style.profilenav} col-md-3`}>
          <div className={style.panel}>
            <div className={`${style.userheading} round`}>
              <a href="#">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
              </a>
              <h1>Camila Smith</h1>
              <p className="text-white">deydey@theEmail.com</p>
            </div>
          
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#"> 
                  {' '}
                  <i className="fab fa-github" />
                  {' '}
                  Github
                  {' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href="#"> 
                  {' '}
                  <i className="fab fa-angellist" />
                  {' '}
                  Angelist
                  {' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href="#"> 
                  {' '}
                  <i className="fab fa-linkedin" />
                  {' '}
                  Linkedin
                  {' '}
                </a>
              </li>
              <li className="list-group-item">
                <a href="#"> 
                  {' '}
                  <i className="fas fa-user-edit" />
                  {' '}
                  Edit Profile
                  {' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.profileinfo} col-md-9`}>
               
          <div className={style.panel}>
            <div className={style.biographheading}>
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
                        
            </div>
            <div className={style.biographinfo}>
              <h1>Bio Graph</h1>
              <div className="row">
                <div className={style.biorow}>
                  <p>
                    <span>Name </span>
                    : Camila
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Birthday </span>
                    : Smith
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Country </span>
                    : Australia
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>City</span>
                    : 13 July 1983
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Email </span>
                    : UI Designer
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Gender </span>
                    : jsmith@flatlab.com
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Work Status </span>
                    : (12) 03 4567890
                  </p>
                </div>
                <div className={style.biorow}>
                  <p>
                    <span>Phone </span>
                    : 88 (02) 123456
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

export default Profile;