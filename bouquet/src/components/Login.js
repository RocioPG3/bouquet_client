import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function handleAuth(e) {
    e.preventDefault();
    const user = window.document.getElementById("user").value;
    const password = window.document.getElementById("password").value;
  
    fetch("http://localhost/bouquet_server/public/index.php/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ username: user, password: password }),
    }).then((data) =>
      data.json().then((data) => {
        localStorage.setItem("token", data["token"]);

        navigate("/Admin/")
      })
    );
  }

  function handleRegister() {
    navigate("/Register");
  }

  return (
    <div className="loginpage">
      <div className="loginform">

        <div className="cardImage"></div>
        <h3>¡Vamos allá!</h3>
        <form className="loginCard" action="#" method="GET">
          <div>
            <label  className="labelform" htmlFor="userEmail">Email:</label>
            <input type="email" name="userEmail" id="user" required />
          </div>
          <div>
            <label className="labelform" htmlFor="userPassword">Password:</label>
            <input
              type="password"
              name="userPassword"
              id="password"
              required
            />
          </div>
          <div className="buttons">
            <button onClick={handleAuth}>Iniciar sesión</button>
            <button onClick={handleRegister}>Crear una cuenta</button>
            </div>
  
        </form>
      </div>
    </div>
  );
}
