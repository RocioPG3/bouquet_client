import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    function handleForm() {
        navigate("/form")
    }

  return (
    <div>

<div className="loginform">
                <h3>Are you ready?</h3>
                <form action="#" method="GET">

                    <div>
                        <label htmlFor="userEmail">Email:</label>
                        <input type="email" name="userEmail" id="userEmail" required />
                    </div>
                    <div>
                        <label htmlFor="userPassword">Password:</label>
                        <input type="password" name="userPassword" id="userPassword" required />
                    </div>
                    <div>
                        <button type="submit">Sign In</button>
                    </div>

                </form>
            </div>

            <div className="newaccount">
                <h3>Create new account</h3>
                <button onClick={handleForm}>Create an account</button>
            </div>
    </div>
  )
}
