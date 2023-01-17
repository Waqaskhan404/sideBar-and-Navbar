import React from 'react'
import SideBar from './SideBar'
import {Routes, 
  // Route
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';


function SideBarRoutes() {
  return (
    <>
        <Routes>
            {/* <Route  path="/login"  element={<Login/>}></Route> */}
        </Routes> 
        <SideBar>
          <Navbar/>
          {/* <Routes> */}
              {/* <Route path="/" element={<Dashboard/>}/> */}
          {/* </Routes> */}
        </SideBar>
    </>
  )
}
export default SideBarRoutes