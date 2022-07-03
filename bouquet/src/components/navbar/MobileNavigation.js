
import Navlinks from './Navlinks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faChampagneGlasses} from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'

export default function MobileNavigation() {
    const [open, setOpen] = useState(false);
    const hamburgerIcon= <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!open)}/>
    const closeIcon= <FontAwesomeIcon icon={faX} onClick={() => setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false);
    return (
    <nav className="MobileNavigation">
        
        {open ? closeIcon : hamburgerIcon}
        {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
       
        </nav>


    
  );
}
