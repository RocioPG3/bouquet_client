import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Ficha( { ficha }) {

    const navigate = useNavigate();

    console.log(ficha.user);
    function handleClick(e) {
        navigate("/booking")
    }
  return (
    <div className='wineries'>
              <h2> {ficha.name} </h2>
              <img src="https://harodigital.com/wp-content/uploads/2020/12/ramon-bilbao-scaled.jpg" alt=""/>
               {/* TODO: la imagen posteriormente la tendre que poner en formato {} para que a cada bodega le asigne la suya */}
              <h3>{ficha.denomination}</h3>
              <p>{ficha.address}</p>
              <p>{ficha.user?.email}</p>
              <p>{ficha.telephone}</p>
              <p>{ficha.services}</p>
              <p>{ficha.description}</p>
              
             
          <button onClick={(e) => handleClick(e)}>Quiero reservar</button>
          



    </div>
  )
}
