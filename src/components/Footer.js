import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';
import {useTranslation} from "react-i18next";
import facebook from '../assets/facebook.png';
import {Link} from 'react-router-dom'
import arbres from '../assets/arbres.png';
import replante from '../assets/arbresReplantes.png';
import logo from '../assets/logo_reforest.png';
const Footer = () => {

  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-img">
          <img src="https://maxandlea.com/wp-content/uploads/2020/05/Logo-Max-et-Lea_Plan-de-travail-1-1024x378.png" alt="" className="img-footer"/>
          <div className="icons-social">
            <i className="fab fa-facebook"/>
            <i className="fab fa-instagram"/>
            <i className="fab fa-youtube"/>
          </div>
        </div>
          <div className="footer-column">
            <a href="#">A propos </a>
            <a href="#">L'équipe</a>
            <Link to="/contact">Contactez-nous</Link>
          </div>
        <div className="footer-column">
          <a href="#">Mentions légales</a>
          <a href="#">CGV</a>
        </div>
        <div className="footer-column footer-terre" >
          <div style={{display: "flex", marginBottom: '10%', flexDirection: 'column'}}>
            <div>
             <img src={arbres} alt="" style={{marginBottom: '5%'}}/>
            </div>
            <div>
              <img src={replante} alt=""/>
              <img src={logo} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
