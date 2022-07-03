import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Wineries from '../components/Wineries';

import Ficha from '../components/Ficha';


export default function FichaPage() {

const [ wineries, setWineries] = useState([]);

const URL ="http://demo5437727.mockable.io/wineries"

    useEffect(() => {
      fetch(URL)
        .then(w => w.json())
        .then(data => setWineries(data));
}, [URL])

      
  return (
    <div>

    {wineries.map(wineries => {
      return (
        
          <div className="BrowserCardStyle">
      
      <Wineries wineries={wineries} />
      

      </div> )

    
    })}
    </div>
  )
 
}
