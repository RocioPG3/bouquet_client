import React from "react";
import { useNavigate } from "react-router";

export default function Winerie({ winerie }) {
  const navigate = useNavigate();


  function handleClick(id) {
    // setIdWinerie(id);                /* para que setee el id de la ficha en la que hemos hecho click */

    navigate(`/ficha/${id}`); /* para que vaya a la página de ficha/la ficha a la que le hemos hecho click */
  }

  return (
    <div>
      <div className="winerieCrud">
        <h2> {winerie.name} </h2>
        <h2>{winerie.denomination}</h2>
        <p>{winerie.location}</p>

        <div className="crudButtons">
          <button className="buttonViña" onClick={(e) => handleClick(winerie.id)}>
            Modificar ésta ruta
          </button>
          <button className="buttonTinto" onClick={(e) => handleClick(winerie.id)}>
            Eliminar ésta ruta
          </button>
        </div>
      </div>
    </div>
  );
}