import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
          <div className="footer-column">
            <a href="#">A propos</a>
            <a href="#">L'Equipe</a>
            <a href="#">Contactez-nous</a>
            <a href="#">Mentions légales</a>
            <a href="#">CGV</a>
          </div>
          <div className="footer-column">
            <a href="#">Se connecter</a>
            <a href="#">S'inscrire</a>
          </div>
      </div>
    </footer>
  )
}

export default Footer;
