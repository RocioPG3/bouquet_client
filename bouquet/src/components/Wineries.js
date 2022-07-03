import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Wineries({wineries}) {

const navigate = useNavigate();

function handleClick(e) {
  navigate("/ficha")
}

  return (
    <div className='winerie'>
        <h2>{wineries.name}</h2>
        <h3>{wineries.do}</h3>
        <p>{wineries.location}</p>
        <span>{wineries.telephone}</span>
        <img src={wineries.image} alt="" />
        <button onClick={(e) => handleClick(e)}>Quiero saber más</button>

    </div>
  )
}
