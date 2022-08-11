
import { useEffect } from 'react';
import React, {useState} from "react";



import Wineries from '../components/Wineries';


export default function WineriesPage() {

  const [wineries, setWineries] = useState([]);
  const [winerieFilter, setWinerieFilter] = useState('');

const URL ="http://localhost/bouquet_server/public/index.php/api/wineries/read";

    useEffect(() => {
      fetch(URL)
      .then((r) => r.json())
      .then((data)=> {
        setWineries(
          data["data"]
        ); /* porque tengo que acceder a la key 'data' dentro del objeto json el array de las varias que podría haber (definida en el back en el api controller para cada endpoint) */
      });
  }, [URL]);

      
  return (
    <div>
    <div>
    </div>
    <div>
      <form className="formFinder">
        <p className="textFinder">Busca tu bodega:</p>
        <input 
        type="text"
        placeholder="Introduce la Denominación de Origen"
        className="inputFinder"
        name="inputFinder"
        autoComplete="off"
        onChange={event => {setWinerieFilter(event.target.value)}}/>
      </form>
    </div>

    <div className="gridWineries">

      {wineries.filter((winerie) => {
        if (winerieFilter === "") {
          return winerie

        } else if (winerie.denomination.toLowerCase().includes(winerieFilter.toLowerCase().trim())) {
          return winerie
          
        } else if (winerie.location.toLowerCase().includes(winerieFilter.toLowerCase().trim())) {
          return winerie
        
        } else {
          return false
        }

      }).map((winerie) => {
        return <Wineries wineries={winerie} key={winerie.id} />       
      
      })}
              
    </div>

  </div>
)
  } 
