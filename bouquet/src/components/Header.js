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
      <h2>Bouquet</h2>

      <p>Una experiencia gourmet</p>
      </div>
    </div>
  );
}
