import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartPulse} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className='footer'>

        <p>From Málaga with <FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon> | 2022</p>

    </div>
  )
}
