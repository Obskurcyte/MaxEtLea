import React from 'react';
import './GarantiesMaxEtLea.css'
import "./Engagement.css";
import {useTranslation} from "react-i18next";


const Engagement = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="garanties-supercontainer">
      <h1 style={{textAlign: 'center'}} className="garanties-title">{t("Engagement.1")}</h1>
      <div className="satisfactions">
        <div className="inner-satisfaction">
          <i className="fas fa-baby" />
          <h3 className="garanties-undertitle">{t("Engagement.2")}</h3>
          <p className="garanties-paragraph">{t("Engagement.3")}</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-leaf" />
          <h3 className="garanties-undertitle">{t("Engagement.4")}</h3>
          <p className="garanties-paragraph">{t("Engagement.5")}</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-medal" />
          <h3 className="garanties-undertitle">{t("Engagement.6")}</h3>
          <p className="garanties-paragraph">{t("Engagement.7")}</p>
        </div>
        <div className="inner-satisfaction">
          <i className="fas fa-grin-stars" />
          <h3 className="garanties-undertitle">{t("Engagement.8")}</h3>
          <p className="garanties-paragraph">{t("Engagement.9")}</p>
        </div>
      </div>
    </div>
  )
};

export default Engagement;
