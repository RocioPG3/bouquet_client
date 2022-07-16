import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Ficha( { wineries }) {

    const navigate = useNavigate();

    function handleClick(e) {
        navigate("/booking")
    }
  return (
    <div className='wineries'>
        <h2> {wineries.name} </h2>
        <img src={wineries.photo} alt="" />
        <h3>{wineries.do}</h3>
        <p>{wineries.location}</p>
        <p>{wineries.telephone}</p>
        <img src={wineries.image} alt="" />
        <button onClick={(e) => handleClick(e)}>Quiero reservar</button>
        <button onClick={(e) => handleClick(e)}>Quiero saber más</button>



    </div>
  )
}
