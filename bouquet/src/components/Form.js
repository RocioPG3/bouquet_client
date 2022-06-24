import React from 'react'

export default function Form() {
  return (
    <div className="form">

         <form action="#" method="POST">
                <label htmlFor="newFirstName">Name(s):</label> {/* for en JS es palabra reservarda por ello se utiliza la combinación htmlFor*/}
                <input type="text" name="newFirstName" id="newFirstName" required />
                <label htmlFor="newLastName">Surname(s):</label>
                <input type="text" name="newLastName" id="newLastName" required />
                <label htmlFor="newEmail">Email:</label>
                <input type="email" name="newEmail" id="newEmail" required />
                <label htmlFor="newPassword">Password:</label>
                <input type="password" name="newPassword" id="newPassword" required />


                <button type="submit">Submit</button>
            </form> 
    </div>
  )
}
