import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { IoGlobeSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";


const ContactInfo = () => (
    <div className="text-start mt-4 pt-4">
    <ul className="list-unstyled">
      <li className="d-flex align-items-center py-2 fs-6 fs-md-5" style={{ color: '#104b60' }}>
        <span className="p-1 me-2 rounded-circle bg-light d-inline-flex align-items-center justify-content-center">
          <IoCall className="fs-6 fs-md-5" />
        </span>
        +91 6372304687
      </li>
      <li className="d-flex align-items-center py-2 fs-6 fs-md-5" style={{ color: '#104b60' }}>
        <span className="p-1 me-2 rounded-circle bg-light d-inline-flex align-items-center justify-content-center">
          <FaHouseChimneyUser className="fs-6 fs-md-5" />
        </span>
        4974 Colonial Drive, Houston, Texas
      </li>
      <li className="d-flex align-items-center py-2 fs-6 fs-md-5" style={{ color: '#104b60' }}>
        <span className="p-1 me-2 rounded-circle bg-light d-inline-flex align-items-center justify-content-center">
          <IoGlobeSharp className="fs-6 fs-md-5" />
        </span>
        armstrong.com
      </li>
      <li className="d-flex align-items-center py-2 fs-6 fs-md-5" style={{ color: '#104b60' }}>
        <span className="p-1 me-2 rounded-circle bg-light d-inline-flex align-items-center justify-content-center">
          <IoIosMail className="fs-6 fs-md-5" />
        </span>
        info@michaelsarm.com
      </li>
    </ul>
  </div>
);

export default ContactInfo;
