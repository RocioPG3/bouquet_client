import React from "react";
import { useNavigate } from "react-router";

export default function WinerieCrud({ winerie }) {
  const navigate = useNavigate();


  function handleClickEdit(id) {
    // setIdWinerie(id);                /* para que setee el id de la ficha en la que hemos hecho click */

    navigate(`/editWinerieForm/${id}`); /* para que vaya a la página de ficha/la ficha a la que le hemos hecho click */
  }

  function handleClickDelete(id) {

    
    fetch(`http://localhost/bouquet_server/public/index.php/admin/wineries/delete/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(res => res.json())
    .then(res => {
      if (res === 202){
        alert("¡Bodega eliminada!")
      }
    });

    
  }

  return (
    <div>
      <div className="winerieCrud">
        <h2> {winerie.name} </h2>
        <h2>{winerie.denomination}</h2>
        <p>{winerie.location}</p>

        <div className="crudButtons">
          <button className="buttonViña" onClick={(e) => handleClickEdit(winerie.id)}>
            Modificar ésta ruta
          </button>
          <button className="buttonTinto" onClick={(e) => handleClickDelete(winerie.id)}>
            Eliminar ésta ruta
          </button>
        </div>
      </div>
    </div>
  );
}