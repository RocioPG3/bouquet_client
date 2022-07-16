import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Ficha( { ficha }) {

    const navigate = useNavigate();

    function handleClick(e) {
        navigate("/booking")
    }
  return (
    <div className='wineries'>
        <h2> {ficha[0].name} </h2>
        <img src={ficha[0].photo} alt="" />
        <h3>{ficha[0].do}</h3>
        <p>{ficha[0].location}</p>
        <p>{ficha[0].telephone}</p>
        <img src={ficha[0].image} alt="" />
        <button onClick={(e) => handleClick(e)}>Quiero reservar</button>
        {/* <button onClick={(e) => handleClick(e)}>Quiero saber más</button> */}



    </div>
  )
}
