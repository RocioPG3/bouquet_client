import "./Carousel.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";


export const Carousel = () => {

  return (
    <div class="pic-container">
    <img src={img1} alt="" class="pic"/>
    <img src={img2} alt="" class="pic"/>
    <img src={img3} alt="" class="pic"/>
    <img src={img4} alt="" class="pic"/>
    <img src={img5} alt="" class="pic"/>
   
  </div>
  );
};