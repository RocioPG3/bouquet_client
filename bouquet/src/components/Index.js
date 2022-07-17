import React from "react";
import { Carousel } from "../components/Carousel";


export default function Index() {
  return (
  
    <div className="containerhome">

      <Carousel/>
      
      <div className="texthome">
        <h1>¿Qué nos ofrece Bouquet?</h1>
        <p>
          Bouquet es tu portal para descubrir de una manera diferente y divertida las bodegas más bonitas de España.
          Aquí podrás encontrar las mejores actividades que nos ofrece cada bodega.Disfruta de las experiencias que te ofrecemos diseñadas pensando en ti.
        </p>
        {/* <img
          className="imagehome"
          src="https://static2.diariosur.es/www/multimedia/202106/18/media/cortadas/1-k20D-U140754340573k6B-1968x1216@Diario%20Sur.jpg"
          alt="imagehome"
        /> */}
      </div>

      <div className="container1">
      <img src="https://vinosdo.wine/assets/uploads/2018/04/ribera-guadiana-1.jpg" alt="" />

        <div className="containerText1">
          <h2>Nuestra misión </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iste magni ipsa, vel asperiores illum doloremque quidem reiciendis dolor eveniet! Sunt nisi porro maxime dolor unde voluptas debitis pariatur placeat!</p>
        </div>
        
      </div>
      <div className="container2">
          <img src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
          <div className="containerText2">
          <h2>Nuestra historia</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iste magni ipsa, vel asperiores illum doloremque quidem reiciendis dolor eveniet! Sunt nisi porro maxime dolor unde voluptas debitis pariatur placeat!</p>
          </div>
        
      
      </div>
      <div className="container3">
          <img src="https://static3.larioja.com/lomejordelvinoderioja/multimedia/201907/30/media/cortadas/unnamed-ksNF-U80876854257LTF-1248x770@La%20Rioja.jpg" alt="" />
          <div className="containerText3">
          <h2>Lorem ipsum, dolor sit amet consectetur</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iste magni ipsa, vel asperiores illum doloremque quidem reiciendis dolor eveniet! Sunt nisi porro maxime dolor unde voluptas debitis pariatur placeat!</p>
          </div>
        
      
      </div>


      
    </div>
  );
}
