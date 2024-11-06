import React from 'react';
import './Language.css'

const Languages = () => (
  <div className="languages mt-4 text-start">
    <h4 >Languages</h4>
    <ul className="list-unstyled">
  <li className="d-flex justify-content-around align-items-center py-2">
    <span>English</span>
    <div>
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
    </div>
  </li>
  <li className="d-flex justify-content-around align-items-center py-2">
    <span>Spanish</span>
    <div>
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
    </div>
  </li>
  <li className="d-flex justify-content-around align-items-center py-2">
    <span>German</span>
    <div>
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
    </div>
  </li>
  <li className="d-flex justify-content-around align-items-center py-2">
    <span>British</span>
    <div>
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
      <input type="checkbox" className="custom-checkbox mx-1" />
    </div>
  </li>

</ul>

  </div>
);

export default Languages;
