import React from 'react';
import './GarantiesMaxEtLea.css'

const Engagement = () => {
  return (
    <div className="garanties-supercontainer">
      <h1 style={{textAlign: 'center'}}>Max et Léa s'engagent à 100% pour vous</h1>
      <div className="satisfactions">
        <div className="inner-satisfaction">
          <h3>100% Sécurisé</h3>
          <p>100% Respect des exigences Sécurité Jouet Européennes
            Tailles et formes des pièces en accord avec les gabarits sécurité officiels</p>
        </div>
        <div className="inner-satisfaction">
          <h3>100% Eco-Friendly</h3>
          <p>100% Bois et 100% Naturel
            Peinture & vernis Écologique à base d'eau</p>
        </div>
        <div className="inner-satisfaction">
          <h3>100% Qualité</h3>
          <p>Conçue et dessinée en France
            Finitions soignées
            Conception robuste et Qualité des matériaux</p>
        </div>
        <div className="inner-satisfaction">
          <h3>100% Eveil</h3>
          <p>Pensée pour le développement Psycho-moteur de l’enfant
            Ludique et divertissante</p>
        </div>
      </div>
    </div>
  )
};

export default Engagement;
