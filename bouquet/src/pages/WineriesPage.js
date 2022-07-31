
import { useEffect } from 'react';
import React, {useState} from "react";



import Wineries from '../components/Wineries';


export default function WineriesPage() {

  const [wineries, setWineries] = useState([]);

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
    <div className='gridWineries'>

     {wineries?.map((wineries) => {
        return <Wineries wineries={wineries} key={wineries.id} />;

    
    })}
    </div>
  )
  } 
