
import React, { useEffect, useState } from "react";

export default function Bookings() {

    const [routeNames, setRouteNames] = useState([]);    


    let URL = "http://localhost/bouquet_server/public/index.php/api/wineries/read/select";

    useEffect(() => {
        fetch(URL)
        .then((r) => r.json())
        .then((data) => setRouteNames(data["data"]));
    }, [URL]);
  
    return (
      <div className="bookings">
        <h3>Reserva tu bodega</h3>
        <form action="#" method="POST">
          <label htmlFor="contactRoute">Bodega para visitar:</label>
          <select name="contactRoute" id="contactRoute" required>
            {routeNames.map((routeName) => {
              return <option value={routeName.id}>{routeName.name}</option>;
            })}
          </select>
  
          <label htmlFor="contactDate">Fecha de interés:</label>
          <input type="date" name="contactDate" id="contactDate" required />
  
          <label htmlFor="contactName">Nombre:</label>
          <input
            type="text"
            name="contactName"
            id="contactName"
            required
            placeholder="Introduzca su nombre"
          />
  
          <label htmlFor="contactLastname">Apellidos:</label>
          <input
            type="text"
            name="contactLastname"
            id="contactLastname"
            required
            placeholder="Introduzca su(s) apellido(s)"
          />
  
          <label htmlFor="contactEmail">Email:</label>
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            required
            placeholder="Ej: nombre@gmail.com"
          />
  
          <label htmlFor="contactMessage">Mensaje:</label>
          <textarea
            name="contactMessage"
            id="contactMessage"
            placeholder="Si desea hacer alguna aclaración o comentario, por favor indíquelo aquí. En cuanto recibamos su solicitud y comprobemos la disponibilidad para la ruta y fechas seleccionadas, nos pondremos en contacto con usted."
          ></textarea>
  
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
        





    }