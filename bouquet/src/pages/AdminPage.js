import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WinerieCrud from "../components/WinerieCrud";

export default function AdminPage() {
  
  const navigate = useNavigate();
  function handleClick() {
    navigate("/newWinerieForm/");
  }
  const [wineries, setWineries] = useState([]);
  


  const URL = "http://localhost/bouquet_server/public/index.php/admin/wineries/read/user";

  useEffect(() => {
  fetch(URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((request) => {
    
    request.json().then((data) => {
      setWineries(data["data"]);
    })
  }

  );
}, [URL]);

  return (
    <div>
      <br />
      <button className="buttonGreen" onClick={(e) => handleClick()}>
        Añadir bodega
      </button>
      <br />
      <br />
      <div className="gridWineriesAdmin">
        {wineries?.map((winerie) => {
          return <WinerieCrud wineries={winerie} key={winerie.id} />;
        })}
      </div>
    </div>
  );
}