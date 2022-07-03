import React from 'react'
import { useState, useEffect} from 'react';


import Wineries from '../components/Wineries';


export default function WineriesPage() {

const [ wineries, setWineries] = useState([]);

const URL ="http://demo5437727.mockable.io/wineries"

    useEffect(() => {
      fetch(URL)
        .then(r => r.json())
        .then(data => setWineries(data));
}, [URL])

      
  return (
    <div>

    {wineries.map(wineries => {
      return (
        <div>
          <div className="BrowserCardStyle">
      
      <Wineries wineries={wineries} />
      

      </div>
        </div>)

    
    })}
    </div>
  )
  } 
