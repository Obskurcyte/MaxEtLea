import React from 'react';
import './GarantiesMaxEtLea.css';
import {useTranslation} from "react-i18next";




const Garanties = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="garanties-supercontainer">
      <h1 style={{textAlign: 'center'}} className="garanties-title">{t("Garanties.1")}</h1>
      <div className="satisfactions">
        <div className="inner-satisfaction">
          <i className="fas fa-credit-card" />
          <h3 className="garanties-undertitle">{t("Garanties.2")}</h3>
          <p className="garanties-paragraph">{t("Garanties.3")}</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-dolly" />
          <h3 className="garanties-undertitle">{t("Garanties.4")}</h3>
          <p className="garanties-paragraph">{t("Garanties.5")}</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-headphones-alt"/>
          <h3 className="garanties-undertitle">{t("Garanties.6")}</h3>
          <p className="garanties-paragraph">{t("Garanties.7")}</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-clock"/>
          <h3 className="garanties-undertitle">{t("Garanties.8")}</h3>
          <p className="garanties-paragraph">{t("Garanties.9")}</p>
        </div>
      </div>
    </div>
  )
};

export default Garanties
