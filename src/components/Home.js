import React from 'react';

function Home() {
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
          <li><a className="btn-floating yellow darken-1" href="https://github.com/CatLoverKid"><i className="mdi mdi-github-circle"></i></a></li>
          <li><a className="btn-floating red" href="http://www.aclkeba@gmail.com"><i className="mdi mdi-gmail">insert_chart</i></a></li>
          <li><a className="btn-floating green" href="http://www.linkedin.com/in/anthony-keba-430b6762"><i className="mdi mdi-linkedin-box">insert_chart</i></a></li>
          <li><a className="btn-floating blue" href="https://www.facebook.com/CatLoverKid"><i className="mdi mdi-facebook-box">insert_chart</i></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
