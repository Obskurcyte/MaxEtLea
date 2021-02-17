import React from 'react';
import "./CardJouet.css"

const CardJouet = props => {
  return (
    <div className="card-container">
      <h2>{props.seller}</h2>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
      <button className="jouet-button">Voir produit</button>
      <img src="" alt=""/>
    </div>
  )
};

export default CardJouet
