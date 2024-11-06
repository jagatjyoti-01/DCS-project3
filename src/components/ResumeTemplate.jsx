import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Education from './Education';
import ContactInfo from './ContactInfo';
import Skills from './Skills';
import Languages from './Languages';
import WorkingSkills from './WorkingSkills';
import WorkExperience from './WorkExperience';
import Profilepic from './Profilepic';

const ResumeTemplate = () => (
  <div className="container my-3 bg-body-secondary px-5">
    
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 border bg-light ps-4 pb-4">
      <Header />
      <div className='border ms-4 mt-4 border-secondary-subtle' style={{"width": "96%"}}></div>
        <AboutMe />
        <Education />
        <WorkingSkills />
        <WorkExperience />
      </div>
      <div className="col-md-4 bg-info  border bg-opacity-25 ">
        <Profilepic/>
        <ContactInfo />
        <Skills />
        <Languages />
       
      </div>
    </div>
  </div>
);

export default ResumeTemplate;
