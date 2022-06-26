import React from "react";
import Footer from "./Footer";


export default function Index() {
  return (
    <div>
      
      <div className="texthome">
        <h1>¿Qué nos ofrece Bouquet?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos
          sed aut, eligendi excepturi, deleniti, nemo laboriosam tenetur que
        </p>
        <img
          className="imagehome"
          src="https://static2.diariosur.es/www/multimedia/202106/18/media/cortadas/1-k20D-U140754340573k6B-1968x1216@Diario%20Sur.jpg"
          alt="imagehome"
        />
      </div>

      <Footer />
    </div>
  );
}
