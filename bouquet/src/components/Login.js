import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function handleForm() {
    navigate("/form");
  }

  return (
    <div className="loginpage">
      <div className="loginform">
        <h3>¡Vamos allá!</h3>
        <form action="#" method="GET">
          <div>
            <label  className="labelform" htmlFor="userEmail">Email:</label>
            <input type="email" name="userEmail" id="userEmail" required />
          </div>
          <div>
            <label className="labelform" htmlFor="userPassword">Password:</label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              required
            />
          </div>
          <div>
            <button type="submit">Sign In</button>
            <div className="newaccount">
            <button onClick={handleForm}>Crea una nueva cuenta</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
