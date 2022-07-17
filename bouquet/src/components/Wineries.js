import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from "../App";




export default function Wineries({wineries}) {

const navigate = useNavigate();

const { setIdWinerie } = useContext(GlobalContext);

function handleClick(id) {
  setIdWinerie(id);                /* para que haga set en el id de la ficha en la que hemos hecho click */

  navigate(`/ficha/${id}`)   /* para que vaya a la página de ficha/la ficha a la que le hemos hecho click */
}




  return (
    <div className='winerie'>
        <h2>{wineries.name}</h2>
        <h3>{wineries.do}</h3>
        <p>{wineries.location}</p>
        <span>{wineries.telephone}</span>
        <img src={wineries.image} alt="" />
        <button onClick={(e) => handleClick(wineries.id)}>Quiero saber más</button>

    </div>
  )
}
