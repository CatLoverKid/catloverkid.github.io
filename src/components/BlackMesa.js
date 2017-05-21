import React from 'react';

function BlackMesa() {
  return (
    <div className="container">
      <br />
      <div className="row center">
        <br />
      </div>
      <br />
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red"><i className="mdi mdi-share-variant">social_media</i></a>
        <ul>
          <li><a target="_blank" className="btn-floating yellow darken-1" href="https://github.com/CatLoverKid"><i className="mdi mdi-github-box"></i></a></li>
          <li><a target="_blank" className="btn-floating red" href="mailto:aclkeba@gmail.com"><i className="mdi mdi-gmail"></i></a></li>
          <li><a target="_blank" className="btn-floating green" href="http://www.linkedin.com/in/anthony-keba-430b6762"><i className="mdi mdi-linkedin-box"></i></a></li>
          <li><a target="_blank" className="btn-floating blue" href="https://www.facebook.com/CatLoverKid"><i className="mdi mdi-facebook-box"></i></a></li>
        </ul>
      </div>
    </div>
  );
}

export default BlackMesa;
