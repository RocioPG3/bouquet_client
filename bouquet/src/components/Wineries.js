import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Winerie({ wineries }) {
  const navigate = useNavigate();

  // const { setIdWinerie } = useContext(GlobalContext);

  function handleClick(id) {
    // setIdWinerie(id);                /* para que setee el id de la ficha en la que hemos hecho click */

    navigate(`/ficha/${id}`); /* para que vaya a la página de ficha/la ficha a la que le hemos hecho click */
  }

  return (
    <div className="BrowserCardStyle">
      <div className="winerie">
        <h2> {wineries.name} </h2>
        <img src="https://www.rutasdelvinorioja.com/wp-content/uploads/2020/11/Ruta-del-Vino-de-Rioja-Alta-Bodegas-Ramon-Bilbao-Exterior.jpg" alt=""/>   
        {/* TODO: la imagen posteriormente la tendre que poner en formato {} para que a cada ruta le asigne la suya */}
        <h3>{wineries.denomination}</h3>
        <p>{wineries.location}</p>

        <button onClick={(e) => handleClick(wineries.id)}>Más información</button>
      </div>
    </div>
  );
}
