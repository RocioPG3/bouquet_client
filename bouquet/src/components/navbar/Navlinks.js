import { NavLink } from "react-router-dom";


export default function Navlinks(props) {
  
  return (
    <>
      <div className="navlinks">
        <NavLink to="/" className="navlink" activeclassname="active" onClick={()=> props.isMobile && props.closeMobileMenu()}>
          Home
        </NavLink>
        <NavLink
          to="/Denominations"
          className="navlink"
          activeclassname="active" onClick={()=> props.isMobile && props.closeMobileMenu()}
        >
          D.O
        </NavLink>
        <NavLink to="/Wineries" className="navlink" activeclassname="active" onClick={()=> props.isMobile && props.closeMobileMenu()}>
          Nuestras bodegas
        </NavLink>

        <NavLink to="/Login" className="navlink" activeclassname="active" onClick={()=> props.isMobile && props.closeMobileMenu()}>
          Login
        </NavLink>
        <NavLink to="/Admin" className="navlink" activeclassname="active" onClick={()=> props.isMobile && props.closeMobileMenu()}>
          Admin
        </NavLink>
       
      </div>
    </>
  );
}
