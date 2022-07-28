
import React, { useEffect, useState } from "react";

export default function Bookings() {

    const [winerieNames, setWinerieNames] = useState([]);    


    let URL = "http://localhost/bouquet_server/public/index.php/api/wineries/select";

    useEffect(() => {
        fetch(URL)
          .then(r => r.json())
          .then(data => setWinerieNames(data));
        }, [URL]) 

    return (
        <div className="bookings">
            <h3>Reserva tu bodega</h3>
            <form action="#" method="POST">

                <label htmlFor="contactWinerie">Bodega:</label>
                <select name="contactWinerie" id="contactWinerie" required >
                   {winerieNames.map(winerieName => {
                       return (<option key={winerieName} value={winerieName}>{winerieName}</option>)
                   })} 
                </select>

                <label htmlFor="contactDate">Fecha visita:</label>
                <input type="date" name="contactDate" id="contactDate" required />

                <label htmlFor="contactName">Nombre:</label>
                <input type="text" name="contactName" id="contactName" required placeholder="Introduzca su nombre" />

                <label htmlFor="contactLastname">Apellidos:</label>
                <input type="text" name="contactLastname" id="contactLastname" required placeholder="Introduzca su(s) apellido(s)" />

                <label htmlFor="contactEmail">Email:</label>
                <input type="email" name="contactEmail" id="contactEmail" required placeholder="Ej: name@gmail.com" />

                <label htmlFor="contactMessage">Mensaje:</label>
                <textarea name="contactMessage" id="contactMessage" placeholder="Escríbenos cualquier consulta que nos quieras hacer, te contactaremos lo antes posible."></textarea>

                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    )
} 