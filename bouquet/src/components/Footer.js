import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartPulse} from "@fortawesome/free-solid-svg-icons";
import {faMapPin} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className='footer'>
      
        <p>From Málaga with <FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon> | 2022</p>
        
      <div className='elementFooter'>
         
         
          <p><FontAwesomeIcon icon={faMapPin} style={{fontSize: '10px'}}></FontAwesomeIcon>Bouquet<br/>  Pasaje Miramar del Palo, Bloque 3<br/> 29017, Málaga.</p>
          <p><FontAwesomeIcon icon={faPhone}style={{fontSize: '10px'}}></FontAwesomeIcon> 669 151 780</p>
          <a href="mailto:info@bouquet.es"><FontAwesomeIcon icon={faEnvelopeOpenText}style={{fontSize: '10px'}}></FontAwesomeIcon>info@bouquet.es</a>
        
          
  
      </div>
    </div>
  )
}
