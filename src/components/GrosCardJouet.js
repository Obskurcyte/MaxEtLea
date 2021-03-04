import React from 'react';
import "./CardJouet.css"

const GrosCardJouet = props => {
  return (
    <div className="card-container">
      <h2 className="best-seller">{props.seller}</h2>
      <h1 className="jouet-title">{props.title}</h1>
      <h5 className="jouet-text">{props.description}</h5>
      <button className="jouet-button"><a href={props.navigation}>Voir produit</a></button>
      <img src="https://maxandlea.com/wp-content/uploads/2020/10/VueProduit-Tablette-MaxAndLea-2-min.png" alt="" className={props.className}/>
    </div>
  )
};

export default GrosCardJouet;
