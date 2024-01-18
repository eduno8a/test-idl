import React, { useState } from 'react';
import logo from '../assets/logoibl.png'
import home from '../assets/hogar.png'
import profile from '../assets/avatar.png'
import { Link } from "react-router-dom";


function SideBar() {

  return (
      <div className="sidebar_content">
        <div className='sidebar_logo'>
          <img className='login_logo' src={logo}/>
        </div>
      <ul>
        <li> <Link to="/dashboard"> <img src={home} /> <span>Dashboard</span></Link> </li>
        <li> <Link to="/profile"> <img src={profile} /> <span>Profile</span></Link> </li>
      </ul>
 
    </div>
  );
}

export default SideBar