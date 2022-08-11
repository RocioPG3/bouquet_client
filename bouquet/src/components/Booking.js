
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Bookings() {

    const [routeDetails, setRouteDetails] = useState([]);    
    
    const { id } = useParams();

    let URL = `http://localhost/bouquet_server/public/index.php/api/wineries/read/booking/see/${id}`;
    


    useEffect(() => {
        fetch(URL)
        .then((r) => r.json())
        .then((data) => setRouteDetails(data["data"][0]));
    }, [URL]);
  
    return (
      <div className="bookings">
        <h3>Reserva tu bodega</h3>

        <form action="#" method="POST">
          <label htmlFor="contactWinerie">Bodega para visitar:</label>
          <input
            type="text"
            name="contactWinerie"
            id="contactWinerie"
            required
            placeholder="Nombre Bodega"
          />
  
          <label htmlFor="contactDate">Fecha de interés:</label>
          <input
            type="date"
            name="contactDate"
            id="contactDate"
          />
          
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
            placeholder="Si desea hacer alguna aclaración o comentario, por favor indíquelo aquí. Próximamente nos pondremos en contacto con usted."
          ></textarea>
  
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
        





    }