import "./Carousel.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";


export const Carousel = () => {

  return (
    <div className="pic-container">
    <img src={img1} alt="" className="pic"/>
    <img src={img2} alt="" className="pic"/>
    <img src={img3} alt="" className="pic"/>
    <img src={img4} alt="" className="pic"/>
    <img src={img5} alt="" className="pic"/>
   
  </div>
  );
};