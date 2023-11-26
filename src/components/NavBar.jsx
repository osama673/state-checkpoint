import React from 'react'
import { FiSearch } from "react-icons/fi";
import "./style.css"

function NavBar() {
  return (
    <div className="navbar-container" >
      <h1>Nav<span className="logo ">Bar</span></h1>
      <ul className="nav-items-container">
        <li >home</li>
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Clients</li>
        <li>contacts</li>
        <li className='request'>request a rate</li>
        <li className='fa-search'><FiSearch className='fa-search' size={30}/></li>
      </ul>
    </div>
  );
}

export default NavBar