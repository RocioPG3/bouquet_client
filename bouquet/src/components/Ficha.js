import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Ficha( { ficha }) {

    const navigate = useNavigate();

    function handleClick(e) {
        navigate("/booking")
    }
  return (
    <div className='wineries'>
              <h2> {ficha.name} </h2>
              <h3>{ficha.denomination}</h3>
              <p>{ficha.address}</p>
              <p>{ficha.telephone}</p>
              <p>{ficha.description}</p>
              <img src="https://harodigital.com/wp-content/uploads/2020/12/ramon-bilbao-scaled.jpg" alt=""/>
              {/* TODO: la imagen posteriormente la tendre que poner en formato {} para que a cada ruta le asigne la suya */}
          <button onClick={(e) => handleClick(e)}>Quiero reservar</button>
          {/* <button onClick={(e) => handleClick(e)}>Quiero saber más</button> */}



    </div>
  )
}
