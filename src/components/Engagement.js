import React from 'react';
import './GarantiesMaxEtLea.css'
import "./Engagement.css";
import {useTranslation} from "react-i18next";
import photo100 from '../assets/100.png';
import childcare from '../assets/childcare.png';
import stars from '../assets/stars.png';
import ecofriendly from '../assets/eco-label.png';
import smile from '../assets/ellipse2.png'

const Engagement = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="engagement-container">
      <h1 style={{textAlign: 'center'}} className="garanties-title">Max et Léa s'engage à</h1>
      <div className="container-photo1">
        <img src={photo100} alt="" className="photo1"/>
      </div>
      <div className="satisfactions">
        <div className="satisfaction-mini-container">
        <div className="inner-satisfaction">
          <div>
            <img src={childcare} alt="" className="image-garanties"/>
          </div>
          <h3 className="garanties-undertitle">{t("Engagement.2")}</h3>
          <p className="garanties-paragraph">{t("Engagement.3")}</p>
        </div>
        <div className="inner-satisfaction">
          <div>
            <img src={ecofriendly} alt="" className="image-garanties"/>
          </div>
          <h3 className="garanties-undertitle">{t("Engagement.4")}</h3>
          <p className="garanties-paragraph">{t("Engagement.5")}</p>
        </div>
        </div>
        <div className="satisfaction-mini-container">
        <div className="inner-satisfaction">
          <div>
            <img src={stars} alt="" className="image-garanties"/>
          </div>
          <h3 className="garanties-undertitle">{t("Engagement.6")}</h3>
          <p className="garanties-paragraph">{t("Engagement.7")}</p>
        </div>
        <div className="inner-satisfaction">
          <div>
            <img src={smile} alt="" className="image-garanties"/>
          </div>
          <h3 className="garanties-undertitle">{t("Engagement.8")}</h3>
          <p className="garanties-paragraph">{t("Engagement.9")}</p>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Engagement;
