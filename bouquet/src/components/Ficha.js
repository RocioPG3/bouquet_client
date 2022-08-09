import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Ficha( { ficha }) {

    const navigate = useNavigate();

    //console.log(ficha.user);
    function handleClick(e) {
        navigate(`/Booking/${ficha.id}`)
    }
  return (
    <div className='ficha'>
              <h2> {ficha.name} </h2>
              <img src={ficha.image} alt="" />
              <h3>{ficha.denomination}</h3>
              <p>{ficha.address}</p>
              <p>{ficha.user?.email}</p>
              <p>{ficha.telephone}</p>
              <p>{ficha.services}</p>
              <p>{ficha.description}</p>
              
             
          <button onClick={(e) => handleClick(e)}>Quiero reservar</button>
          



    </div>
  );
}
