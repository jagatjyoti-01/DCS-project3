import React from 'react';


const AboutMe = () => (
<div className="about-me container mt-5" style={{color: "#333",fontSize:'0.9em',lineHeight:"1.6"}}>
  <div className="row">
    <div className="col-12">
      <h4 className="mb-0 d-flex ms-md-5" style={{ color: 'rgb(0 52 104 / 75%)', fontFamily: 'initial', fontWeight: '800' }}>About Me</h4>
      <div className="border ms-md-4 border-secondary-subtle" style={{ width: '100%' }}></div>
    </div>
    <div className="col-12">
  <p className=" px-md-5 px-2 fw-medium fs-md-5 fs-6" style={{textAlign:'justify'}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing nostrud exercitation dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
  </p>
</div>

  </div>
</div>

);

export default AboutMe;
