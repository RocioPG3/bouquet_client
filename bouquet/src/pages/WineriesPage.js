import React from 'react'
import { useState, useEffect} from 'react';


import Wineries from '../components/Wineries';


export default function WineriesPage() {

const [ wineries, setWineries] = useState([]);

const URL ="https://run.mocky.io/v3/59c7abee-36b5-4e59-b96a-6573480f5df9"

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
