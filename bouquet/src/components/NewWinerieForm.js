import React from "react";

export default function NewWinerieForm() {
    /* ¿como recibo el id de usuario aqui? */
    function handlePost() {
      const denomination = window.document.getElementById("denomination").value;
      const name = window.document.getElementById("name").value;
      const location = window.document.getElementById("location").value;
      const address = window.document.getElementById("address").value;
      const telephone = window.document.getElementById("telephone").value;
      const services = window.document.getElementById("services").value;
      const description = window.document.getElementById("description").value;
     

      fetch(`http://localhost/bouquet_server/public/index.php/admin/wineries/create`, {
      /* ...para que lo coja aquí y asigne la bodega a dicho id de usuario? */
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + localStorage.getItem("token"),
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
    }).then((data) =>
      data.json().then((data) => {
        localStorage.setItem("token", data["token"]);
      })
    );
  }

  return (
    <div className="post">
      <h3>Publicar una nueva bodega</h3>

      <form action="#" method="POST">
        <label htmlFor="denomination">DO</label>
        <input
          type="text"
          name="denomination"
          id="denomination"
          required
          placeholder="Introduzca la denominación de origen"
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
          placeholder="Introduzca una descripción de la bodega, su historia y tipo de vino por ejemplo."
        ></textarea>
        

        <button type="button" onClick={handlePost}>
          Enviar
        </button>
      </form>
    </div>
  );   

}