import React from 'react';
import './GarantiesMaxEtLea.css';
import {useTranslation} from "react-i18next";
import headphones from '../assets/headphones.png';
import payment from '../assets/Payment.png';
import like from '../assets/like.png';
import livraison from '../assets/delivering.png'



const Garanties = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="garanties-supercontainer">
      <h1 style={{textAlign: 'center'}} className="garanties-title">{t("Garanties.1")}</h1>
      <div className="satisfactions">
        <div className="inner-satisfaction">
          <div>
            <img src={payment} alt="paiement" className="image-garanties" style={{marginTop: '10%'}}/>
          </div>
          <h3 className="garanties-undertitle">{t("Garanties.2")}</h3>
          <p className="garanties-paragraph">{t("Garanties.3")}</p>
        </div>
        <div className="inner-satisfaction">
          <div>
           <img src={like} alt="like" className="image-garanties"/>
          </div>
          <h3 className="garanties-undertitle">{t("Garanties.4")}</h3>
          <p className="garanties-paragraph">{t("Garanties.5")}</p>
        </div>
        <div className="inner-satisfaction">
          <div>
            <img src={headphones} alt="headphones" className="image-garanties"/>
          </div>
          <h3 className="garanties-undertitle">{t("Garanties.6")}</h3>
          <p className="garanties-paragraph">{t("Garanties.7")}</p>
        </div>
        <div className="inner-satisfaction">
          <div>
            <img src={livraison} alt="livraison" className="image-garanties"/>
          </div>
          <h3 className="garanties-undertitle">{t("Garanties.8")}</h3>
          <p className="garanties-paragraph">{t("Garanties.9")}</p>
        </div>
      </div>
    </div>
  )
};

export default Garanties
