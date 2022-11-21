import React from 'react'
import Stulist from '../list/Stulist'
import Navbar from '../navbar/Navbar'
import Student from '../student/Student'

const Mainpage = () => {
  return (
  <>
  <div className="navbar">
    <Navbar/>
  </div>
  <div className='main flex w-screen mt-4 space-x-4 h-full' >
<div className="studentSide "><Student/></div>
{/* <div className="stulist  flex-1 "><Stulist/></div> */}
  </div>
  </>
  )
}

export default Mainpage