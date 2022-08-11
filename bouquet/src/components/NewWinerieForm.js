import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewWinerieForm() {
  
    const navigate= useNavigate();

    function handlePost() {
    const denomination = document.getElementById("denomination").value;
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const services = document.getElementById("services").value;
    const description = document.getElementById("description").value;
   

    fetch("http://localhost/bouquet_server/public/index.php/admin/wineries/create", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        denomination: denomination,
        name: name,
        location: location,
        address: address,
        telephone: telephone,
        services: services,
        description: description,
        active: 1,
        
      }),
    }).then().then();

    navigate('/Admin');
  }
  

  return (
    <div className="post">
      <h3>Publicar una nueva bodega</h3>

      <form action="#" method="POST">
        <label htmlFor="denomination">Denominación Origen:</label>
        <input
          type="text"
          name="denomination"
          id="denomination"
          required
          placeholder="Introduzca DO"
        />
        <label htmlFor="name">Nombre bodega:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Introduzca nombre bodega"
        />


        <label htmlFor="location">Localidad:</label>
        <input
          type="text"
          name="location"
          id="location"
          required
          placeholder="Introduzca localidad"
        />  
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          name="address"
          id="address"
          required
          placeholder="Introduzca dirección"
        /> 

        <label htmlFor="telephone">Teléfono:</label>
        <input
          type="text"
          name="telephone"
          id="telephone"
          required
          placeholder="Introduzca nº teléfono"
        />
        <label htmlFor="services">Servicios:</label>
        <input
          type="text"
          name="services"
          id="services"
          required
          placeholder="Introduzca los servicios que ofrece la bodega"
        />
        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Introduzca una descripción de la bodega, su historia y tipo de vino, por ejemplo."
        ></textarea>
        

        <button type="button" onClick={handlePost}>
          Enviar
        </button>
      </form>
    </div>
  );   

}