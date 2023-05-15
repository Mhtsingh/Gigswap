import React from 'react'

import "./proCard.scss"

const proCard = ({card}) => {
  return (
    <div className="proCard">
    <img src={card.img} alt="" />
    <div className="info">
      <img src={card.pp} alt="" />
      <div className="texts">
        <h2>{card.cat}</h2>
        <span>{card.username}</span>
      </div>
    </div>
  </div>
  )
}

export default proCard