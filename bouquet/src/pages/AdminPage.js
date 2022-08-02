import React, { useState } from "react";
import { useEffect } from "react";

import WinerieCrud from "../components/WinerieCrud";

export default function AdminPage() {
  
  const [wineries, setWineries] = useState([]);
;

  let URL = "http://localhost/bouquet_server/public/index.php/api/wineries/read";

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        setWineries(
          data["data"]
        ); /* porque tengo que acceder, de dentro del objeto json (data), al elemento que tiene la key 'data' ["data"] (puedo ver la estructura de lo que contiene data haciendo aqui un console log) (la key "data" la definí en el back en el wineriesController para cada endpoint) */
      });
  }, [URL]);

  return (
    <div>
      <br />
      <button className="buttonGreen">Añadir nueva ruta</button>
      <br />
      <br />
      <div className="gridWineries2">
        {wineries?.map((winerie) => {
          return <WinerieCrud winerie={winerie} key={winerie.id} />;
        })}
      </div>
    </div>
  );
}