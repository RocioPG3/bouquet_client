import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";


export default function Navbar() {
  return (
    <div className= "navbar">
       <div className="logoNav">
       <img
        className="logo"
        src={process.env.PUBLIC_URL + "/logoweb.png"}
        alt="logo"/>
      
      </div>
    <div className="navMenu">
      <Navigation />
      <MobileNavigation />
    </div>
   
    </div>
  );
}
