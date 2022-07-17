
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { GlobalContext } from '../App';


import Wineries from '../components/Wineries';


export default function WineriesPage() {

const { wineries, setWineries } = useContext(GlobalContext);

const URL ="https://run.mocky.io/v3/59c7abee-36b5-4e59-b96a-6573480f5df9"

    useEffect(() => {
      fetch(URL)
        .then(r => r.json())
        .then(data => setWineries(data));
}, [wineries, URL, setWineries])

      
  return (
    <div className='gridWineries'>

    {wineries.map(wineries => {
    
      return (
        <div key={wineries.id}>
            
          <div className="BrowserCardStyle">
      
      <Wineries wineries={wineries} />
      

      </div>
        </div>)

    
    })}
    </div>
  )
  } 
