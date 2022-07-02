import { NavLink } from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faBars} from '@fortawesome/free-solid-svg-icons'
// import {useState} from 'react'

export default function Navlinks() {
  
  return (
    <>
      <div className="navlinks">
        <NavLink to="/" className="navlink" activeclassname="active">
          Home
        </NavLink>
        <NavLink
          to="/Denominations"
          className="navlink"
          activeclassname="active"
        >
          D.O
        </NavLink>
        <NavLink to="/Wineries" className="navlink" activeclassname="active">
          Nuestras bodegas
        </NavLink>

        <NavLink to="/Login" className="navlink" activeclassname="active">
          Login
        </NavLink>
      </div>
    </>
  );
}
