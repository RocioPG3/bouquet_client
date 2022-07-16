import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import { useEffect } from 'react';
// import Wineries from '../components/Wineries';

import Ficha from '../components/Ficha';


export default function FichaPage() {

const [ wineries, idWineries] = useContext(GlobalContext);
//const [ficha, setFicha] = useState({});

const ficha = wineries.filter((winerie) => winerie.id === idWinerie);
    // setFicha(fichaFiltrada);

// const URL ="https://run.mocky.io/v3/59c7abee-36b5-4e59-b96a-6573480f5df9"

    useEffect(() => {
      console.log(ficha);
    
  
    }, [ficha])
      
//     useEffect(() => {
//     fetch(URL)
//         .then(r => r.json())
//         .then(data => setWineries(data));
// }, [URL])

      
  return (
    <div>
            <div className="BrowserCardStyle">
                <Ficha ficha={ficha} />
            </div>
  
    </div>
  )
 
}
