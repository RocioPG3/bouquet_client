import React from 'react'
import Navlinks from './Navlinks';
import Collapsible from "react-collapsible";  //// https://www.npmjs.com/package/react-collapsible


export default function Navbar() {


    
  return (
    <div>
<nav className="navbar">
                    <div className="hamburger">
                    {/* <Collapsible trigger="" triggerClassName="fas fa-bars fa-lg" triggerOpenedClassName="fas fa-bars fa-lg" triggerTagName="i" > <i className="fas fa-bars fa-lg"></i> */}
                      
                        < Navlinks />
                    {/* </Collapsible> */}
                        
                    </div>
                   
                </nav>
        </div>
    )
  }


  
