import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Wineries({wineries}) {

const navigate = useNavigate();

function handleClick(id) {
  navigate("/ficha/${id}")
}

  return (
    <div className='winerie'>
        <h2>{wineries.name}</h2>
        <h3>{wineries.do}</h3>
        <p>{wineries.location}</p>
        <span>{wineries.telephone}</span>
        <img src={wineries.image} alt="" />
        <button onClick={(e) => handleClick(wineries.id)}>Quiero saber más</button>

    </div>
  )
}
