import React from 'react'

export default function Wineries({wineries}) {
  return (
    <div>
        <h3> {wineries.name} </h3>
        <p>{wineries.location}</p>
        <p>{wineries.do}</p>
        <span>{wineries.telephone}</span>

        <img src={wineries.image} alt="" />

    </div>
  )
}
