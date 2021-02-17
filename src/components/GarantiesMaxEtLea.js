import React from 'react';
import './GarantiesMaxEtLea.css'

const Garanties = () => {
  return (
    <div className="garanties-supercontainer">
      <h1 style={{textAlign: 'center'}}>Les Garanties Max & Léa</h1>
      <div className="satisfactions">
        <div className="inner-satisfaction">
          <i className="fas fa-credit-card" />
          <h3>100% Paiements sécurisés</h3>
          <p>Connexion cryptée (SSL) et sécurisation des paiements par STRIPE et PayPal</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-dolly" />
          <h3>100% Satisfait ou Remboursé</h3>
          <p>Si vous n'êtes pas pleinement satisfait, nous remboursons 100% de votre achat</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-headphones-alt"/>
          <h3>100% Service client réactif</h3>
          <p>Notre service est à votre écoute 7/7 et répond dans un délai de 24h maximum</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-clock"/>
          <h3>100% Livraison Express</h3>
          <p>Livraison depuis Paris (France) en 3-5 jours pour l’ensemble de l’Europe.</p>
        </div>
      </div>
    </div>
  )
};

export default Garanties
