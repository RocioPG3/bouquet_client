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
;

  const URL = "http://localhost/bouquet_server/public/index.php/admin/wineries/read/user";
  useEffect(() => {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  }).then((request) =>
    request.json().then((data) => {
      console.log(data);
    })
  );
}, [URL]);

  return (
    <div>
      <br />
      <button className="buttonGreen" onClick={(e) => handleClick()}>
        Añadir nueva bodega
      </button>
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