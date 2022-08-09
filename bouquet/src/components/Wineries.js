import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Wineries({ wineries }) {
  const navigate = useNavigate();


  function handleClick(id) {
    navigate(`/Ficha/${id}`); 
  }
  return (
    <div className="BrowserCardStyle">
      <div className="winerie">
        <h2> {wineries.name} </h2>
        <img src={wineries.image} alt="" />
        <h3>{wineries.denomination}</h3>
        <p>{wineries.location}</p>

        <button onClick={(e) => handleClick(wineries.id)}>Más información</button>
      </div>
    </div>
  );
}


