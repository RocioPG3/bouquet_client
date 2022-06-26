import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function DenominationsPage() {

    const navigate = useNavigate();

    function handleClick(e) {
    navigate("/wineries")
    }



  return (
    <div className='denominations'>
      

<h1>¿Qué D.O te gustaría conocer?</h1>

      <div className='heading'>

              <div className="divImages">
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Rioja</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Ribera del Duero</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Yecla</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Toro</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Valdepeñas</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Ribera del Guadiana</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Sierra de Málaga</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Arlanza</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel ut esse perspiciatis perferendis recusandae, animi necessitatibus </p>
                    </div>




              </div>

   
              
              <button className='button' onClick={(e) => handleClick(e)}>Busca tu bodega</button>
    </div>

    </div>
  )
}
