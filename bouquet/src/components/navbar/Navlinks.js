import { NavLink } from 'react-router-dom'


export default function Navlinks() {
  return (
    <>
<div className="navlinks">
                <NavLink to="/" className="navlink" activeclassname="active">Home</NavLink>
                <NavLink to="/Denominations"className="navlink"activeclassname="active">D.O</NavLink>
                <NavLink to="/Wineries"className="navlink"activeclassname="active">Nuestras bodega</NavLink>
                {/* <NavLink to="/Book" className="navlink" activeclassname="active">Book now!</NavLink> */}
                <NavLink to="/Login"className="navlink"activeclassname="active">Login</NavLink>
</div>
        
        <div class="dropdown">
        <button class="dropbtn"><i class="fa-solid fa-bars"></i></button>
        <div class="dropdown-content">
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
                <NavLink
                  to="/Wineries"
                  className="navlink"
                  activeclassname="active"
                >
                  Nuestras bodegas
                </NavLink>
                {/* <NavLink to="/Book" className="navlink" activeclassname="active">Book now!</NavLink> */}
                <NavLink
                  to="/Login"
                  className="navlink"
                  activeclassname="active"
                >
                  Login
                </NavLink>
              </div>
              </div>


    </>
  )
}
