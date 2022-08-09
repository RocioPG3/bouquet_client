import React from "react";
import { useParams } from "react-router-dom";

export default function EditWinerieForm() {

  let {id} = useParams();

  function handlePut() {
   
    const denomination = document.getElementById("denomination").value;
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const services = document.getElementById("services").value;
    const description = document.getElementById("description").value;
    

    fetch(`http://localhost/bouquet_server/public/index.php/admin/wineries/edit/${id}`, {
      
      method: "PUT",
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
        
      }),
    }).then().then();
  }

  return (
    <div className="post">
      <h3>Modificar bodega</h3>

      <form action="#" method="PUT">
        <label htmlFor="denomination">Denominación Origen:</label>
        <input
          type="text"
          name="denomination"
          id="denomination"
          required
          placeholder="Introduzca la denominación de origen"
        />

        <label htmlFor="name">Nombre bodega:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Introduzca el nombre de la bodega"
        />

        <label htmlFor="location">Localidad:</label>
        <input
          type="text"
          name="location"
          id="location"
          required
          placeholder="Introduzca la localidad"
        />

        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          name="address"
          id="address"
          required
          placeholder="Introduzca la dirección"
        />

        <label htmlFor="telephone">Teléfono:</label>
        <input
          type="number"
          name="telephone"
          id="telephone"
          required
          placeholder="Introduzca el teléfono"
        />

        <label htmlFor="services">Servicios:</label>
        <input
          type="number"
          name="services"
          id="services"
          required
          placeholder="Introduzca los servicios ofrecidos"
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Introduzca una descripción de la bodega, su historia y tipo de vino."
        ></textarea>

        <button type="button" onClick={handlePut}>
          Enviar
        </button>
      </form>
    </div>
  );
}