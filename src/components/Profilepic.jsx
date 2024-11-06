import React from 'react'
import { FaUser } from "react-icons/fa";


function Profilepic() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-4'>
    <div className='border mt-4 border-dark' style={{ height: '130px', width: '130px', transform: 'rotate(45deg)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <FaUser  style={{transform: 'rotate(-45deg)',fontSize:'80px'}} />

    </div>
</div>

  )
}

export default Profilepic