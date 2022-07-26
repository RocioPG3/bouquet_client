
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { GlobalContext } from '../App';


import Wineries from '../components/Wineries';


export default function WineriesPage() {

const { wineries, setWineries } = useContext(GlobalContext);

const URL ="http://localhost/bouquet_server/public/index.php/api/wineries";

    useEffect(() => {
      fetch(URL)
      .then((r) => r.json())
      .then((data) => setWineries(data));
  }, [URL]);

      
  return (
    <div className='gridWineries'>

     {wineries.map((winerie) => {
        return <Wineries wineries={winerie} key={winerie.id} />;

    
    })}
    </div>
  )
  } 
