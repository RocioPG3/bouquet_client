import React from 'react'

export default function Register() {
  return (
    <div className="registercomponent">
        <h3>Nuevo usuario</h3>
      <form action="#" className="registerform" method="POST">
        <label htmlFor="newEmail">Email:</label>{" "}
        <input type="email" name="newEmail" id="newEmail" required />
        <label htmlFor="newPassword">Contraseña:</label>
        <input type="password" name="newPassword" id="newPassword" required />
        <button type="submit">Registrar</button>
      </form>

    </div>
  )
}
