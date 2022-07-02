
import React from 'react'
import Navlinks from './Navlinks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

export default function MobileNavigation() {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <div class="dropdown">
        <button class="dropbtn"> <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!open)}/></button>
        {open && <Navlinks/>}
        <div class="dropdown-content"></div>
        </div>
    </div>


    
  )
}
