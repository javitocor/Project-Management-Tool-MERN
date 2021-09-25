import React from 'react';
import style from '../style/Projectdetail.module.css';


const ProjectDetail = () => {
  return (
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
                    example@yourdomain.com
                  </div>
                  <div className="col-3">
                    Year:
                  </div>
                  <div className="col-9">
                    +1-800-600-9898
                  </div>
                  <div className="col-3">
                    Status:
                  </div>
                  <div className="col-9">
                    Sacramento, CA
                  </div>
                  <div className="col-3">
                    Links:
                  </div>
                  <div className="col-9">
                    1975/8/17
                  </div>
                  <div className="col-3">
                    Stack:
                  </div>
                  <div className="col-9">
                    http://yourdomain.com
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 col-xs-12">
                <p className={style.contactdescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;