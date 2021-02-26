import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Garanties from "../components/GarantiesMaxEtLea";
import Engagement from "../components/Engagement";
import CardJouet from "../components/CardJouet";
import * as photo from "../assets/photo-bebe.webp"
import './HomeScreen.css';
import Testimony from "../components/Testimony";
import GrosCardJouet from "../components/GrosCardJouet";
import CarouselParents from "../components/Carousel";
import {Carousel} from "react-bootstrap";

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
        <div className="best-jouets" style={{textAlign: 'center', backgroundColor: '#F5F5F5'}}>
          <h1 className="garanties-title">NOS MEILLEURS JOUETS</h1>
          <div className="products-container">
            <div>
              <GrosCardJouet seller="Best Seller" title="La PlayBoard" description="L'outil d'éveil et d'apprentissage le plus complet pour les enfants de 1 à 6 ans." className="jouet1-img" navigation="/playboard"/>
            </div>
            <div>
              <CardJouet title="Le Xylophone" description="Il découvre ses premières notes musicales" className="jouet2-img" navigation="/xylophone"/>
              <CardJouet title="Tour Arc en Ciel" description="Organiser les couleurs et les dégradés" className="jouet2-img" navigation="/tour"/>
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
        <div className="unique">
          <h1 className="unique-title">Parce que chaque enfant est unique...<br /> Les jouets Max & Léa s'adaptent au rythme de chacun.</h1>
          <div className="photo-enfants">
            <img src="https://maxandlea.com/wp-content/uploads/2020/05/Be%CC%81be%CC%812ans.jpg" alt=""/>
            <img src="https://maxandlea.com/wp-content/uploads/2020/05/FilletteSouriante-1.jpg" alt=""/>
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/Be%CC%81be%CC%81Mouvements-MaxAndLea.jpg" alt=""/>
            <img src="https://maxandlea.com/wp-content/uploads/2020/05/Garcon-assis.jpg" alt=""/>
          </div>
        </div>
      <div className="jouet-emerveillement">
        <h1 className="unique-title">Chez Max & Lea<br /> Nous concevons des jouets pour émerveiller vos enfants</h1>
        <div className="photos-emerveillement">
          <div className="text-emerveillement">
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/GarconTableau2-MaxAndLea-1.jpg" alt=""/>
            <i className="fas fa-dove" />
            <p>Chaque enfant est un petit génie !</p>
          </div>
          <div className="text-emerveillement">
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/Be%CC%81be%CC%81Allonge%CC%81-2LOGO-MaxAndLea.jpg" alt=""/>
            <i className="fas fa-drafting-compass"/>
            <p>Donnez lui une boîte à outils pour explorer ses talents</p>
          </div>
          <div className="text-emerveillement">
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/4ans-Garc%CC%A7on-MaxAndLea.jpg" alt=""/>
            <i className="fas fa-child"/>
            <p>Il apprendra en s'amusant et à son rythme</p>
          </div>
          <div className="text-emerveillement">
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/Be%CC%81be%CC%81Machouille-MaxAndLea-1.jpg" alt=""/>
            <i className="fas fa-tree"/>
            <p>100% Bois : Sécure, Durable, & Eco-responsable</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default HomeScreen
