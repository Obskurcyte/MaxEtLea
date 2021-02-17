import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Garanties from "../components/GarantiesMaxEtLea";
import Engagement from "../components/Engagement";
import CardJouet from "../components/CardJouet";
import * as photo from "../assets/photo-bebe.webp"
import './HomeScreen.css';
import Testimony from "../components/Testimony";

const HomeScreen = () => {
  return (
    <div>
      <Header />
        <div className="baby-container">
          <img src="https://maxandlea.com/wp-content/uploads/2020/06/BébéBasAge-MaxAndLeaV.jpg" alt="" className="baby-photo"/>
          <div className="eveil">
            <h1 className="headtitle">S'ÉVEILLER, S'EMERVEILLER, GRANDIR & S'AMUSER</h1>
            <h2 className="subheadtitle">Des jouets Naturels, Eco-Responsables et parfaits pour les 1 à 6 ans</h2>
            <button className="eveil-button">Accéder au shop</button>
          </div>
        </div>
        <div>
          <Garanties />
        </div>
        <div className="best-jouets" style={{textAlign: 'center', backgroundColor: '#F0E9EA'}}>
          <h1>NOS MEILLEURS JOUETS</h1>
          <div className="products-container">
            <div>
              <CardJouet seller="Best Seller" title="La PlayBoard" description="L'outil d'éveil et d'apprentissage le plus complet pour les enfants de 1 à 6 ans."/>
            </div>
            <div>
              <CardJouet title="Le Xylophone" description="Il découvre ses premières notes musicales"/>
              <CardJouet title="Tour Arc en Ciel" description="Organiser les couleurs et les dégradés"/>
            </div>
          </div>
        </div>
        <div className="emerveillement">
          <h1 className="emerveillement-titre">JE VEUX EMERVEILLER MES ENFANTS</h1>
          <button className="emerveillement-button">Accéder au shop</button>
        </div>
        <div>
          <Engagement />
        </div>
        <div>
          <Testimony />
        </div>
      <Footer />
    </div>
  )
};

export default HomeScreen
