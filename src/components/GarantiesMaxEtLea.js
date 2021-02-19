import React from 'react';
import './GarantiesMaxEtLea.css'

const Garanties = () => {
  return (
    <div className="garanties-supercontainer">
      <h1 style={{textAlign: 'center'}} className="garanties-title">LES GARANTIES MAX & LEA</h1>
      <div className="satisfactions">
        <div className="inner-satisfaction">
          <i className="fas fa-credit-card" />
          <h3 className="garanties-undertitle">100% Paiements sécurisés</h3>
          <p className="garanties-paragraph">Connexion cryptée (SSL) et sécurisation des paiements par STRIPE et PayPal</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-dolly" />
          <h3 className="garanties-undertitle">100% Satisfait ou Remboursé</h3>
          <p className="garanties-paragraph">Si vous n'êtes pas pleinement satisfait, nous remboursons 100% de votre achat</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-headphones-alt"/>
          <h3 className="garanties-undertitle">100% Service client réactif</h3>
          <p className="garanties-paragraph">Notre service est à votre écoute 7/7 et répond dans un délai de 24h maximum</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-clock"/>
          <h3 className="garanties-undertitle">100% Livraison Express</h3>
          <p className="garanties-paragraph">Livraison depuis Paris (France) en 3-5 jours pour l’ensemble de l’Europe.</p>
        </div>
      </div>
    </div>
  )
};

export default Garanties
