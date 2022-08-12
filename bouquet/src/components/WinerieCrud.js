import React from "react";
import { useNavigate } from "react-router";

export default function WinerieCrud({ wineries }) {
  const navigate = useNavigate();


  function handleClickEdit(id) {
    
    navigate(`/editWinerieForm/${id}`); 
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
        <h2>{wineries.denomination}</h2>
        <h3>{wineries.name}</h3>
        <p>{wineries.location}</p>
        <p>{wineries.address}</p>
        <p>{wineries.telephone}</p>
        <p>{wineries.services}</p>
        <p>{wineries.description}</p>
        <img src={wineries.image} alt="imagen bodega" />

        <div className="crudButtons">
          <button className="buttonViña" onClick={(e) => handleClickEdit(wineries.id)}>
            Editar bodega
          </button>
          <button className="buttonTinto" onClick={(e) => handleClickDelete(wineries.id)}>
            Eliminar bodega
          </button>
        </div>
      </div>
    </div>
  );
}