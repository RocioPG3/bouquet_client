
import { useState } from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import Wineries from '../components/Wineries';

import Ficha from '../components/Ficha';


export default function FichaPage() {

const { id } = useParams();
const [ficha, setFicha] = useState({});

const URL = `http://localhost/bouquet_server/public/index.php/api/wineries/read/route/${id}`;
      
useEffect(() => {
  fetch(URL)
    .then((r) => r.json())
    .then((data) => {
      setFicha(data["data"][0], data.data[0].user);
    });
}, [URL]);

      
  return (
    <div>
            <div className="BrowserCardStyle">
                <Ficha ficha={ficha} />
            </div>
  
    </div>
  )
 
}
