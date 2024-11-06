import React from 'react';
import './WorkingSkills.css';
import { BsHexagon } from "react-icons/bs";

const WorkingSkills = () => (
  <div className="working-skills container mt-4">
    <h4 className="mb-0 d-flex ms-md-5" style={{ color: 'rgb(0 52 104 / 75%)', fontFamily: 'initial', fontWeight: '800' }}>Working Skills</h4>
    <div className="border ms-md-4 border-secondary-subtle" style={{ width: '100%' }}></div>
    
    <div className="row d-flex justify-content-center mt-3">
      <div className="col-6 col-md-3 text-center mt-3">
        <div className="hexagon-container">
          <BsHexagon className="hexagon-icon" />
          <span className="percentage">75%</span>
          <p className="fs-8">Problem Solving</p>
        </div>
      </div>
      <div className="col-6 col-md-3 text-center mt-3">
        <div className="hexagon-container">
          <BsHexagon className="hexagon-icon" />
          <span className="percentage">90%</span>
          <p className="ms-2">Attention to detail</p>
        </div>
      </div>
      <div className="col-6 col-md-3 text-center mt-3">
        <div className="hexagon-container">
          <BsHexagon className="hexagon-icon" />
          <span className="percentage">60%</span>
          <p className="ms-2">Communication</p>
        </div>
      </div>
      <div className="col-6 col-md-3 text-center mt-3">
        <div className="hexagon-container">
          <BsHexagon className="hexagon-icon" />
          <span className="percentage">90%</span>
          <p className="ms-2">Technical Knowledge</p>
        </div>
      </div>
    </div>
  </div>
);

export default WorkingSkills;
