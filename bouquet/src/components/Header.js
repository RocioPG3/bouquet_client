import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/logoweb.png"}
        alt="logo"
      />
      <div className="textosheader">
      

      <p>Detrás de un buen vino...
        hay una buena experiencia</p>
      </div>
    </div>
  );
}
