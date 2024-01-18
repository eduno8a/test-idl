import React, { useState } from 'react';
import logo from '../assets/logoibl.png'
import { Link } from "react-router-dom";


function SideBar() {

  return (
      <div className="sidebar_content">
        <div className='sidebar_logo'>
          <img className='login_logo' src={logo}/>
        </div>
      <ul>
        <li> <Link to="/dashboard">Dashboard</Link> </li>
        <li> <Link to="/profile">Profile</Link> </li>
      </ul>
 
    </div>
  );
}

export default SideBar