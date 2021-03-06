import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';
import {useTranslation} from "react-i18next";


const Footer = () => {

  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-img">
          <img src="https://maxandlea.com/wp-content/uploads/2020/05/Logo-Max-et-Lea_Plan-de-travail-1-1024x378.png" alt="" className="img-footer"/>
          <p className="copyright">Copyright © 2021 | Max And Lea</p>
          <img src="https://maxandlea.com/wp-content/uploads/2020/11/127FR.png" alt="" className="img-footer-arbre"/>
        </div>
          <div className="footer-column">
            <a href="#">{t("Footer.1")}</a>
            <a href="#">{t("Footer.2")}</a>
            <a href="#">{t("Footer.3")}</a>
            <a href="#">{t("Footer.4")}</a>
            <a href="#">{t("Footer.5")}</a>
          </div>
          <div className="footer-column">
            <div style={{display: "flex", marginBottom: '10%'}}>
              <i className="fas fa-user-circle"/>
              <a href="#">{t("Footer.6")}</a>
            </div>
            <div style={{display: "flex", marginBottom: '15%'}}>
              <i className="fas fa-user-plus"/>
              <a href="#">{t("Footer.7")}</a>
            </div>
            <div style={{display: "flex"}}>
              <i className="fab fa-facebook"/>
              <i className="fab fa-instagram"/>
              <i className="fab fa-youtube"/>
            </div>

          </div>
      </div>
    </footer>
  )
}

export default Footer;
