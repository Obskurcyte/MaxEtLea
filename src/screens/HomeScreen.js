import React, {useEffect, useState} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Garanties from "../components/GarantiesMaxEtLea";
import Engagement from "../components/Engagement";
import CardJouet from "../components/CardJouet";
import './HomeScreen.css';
import Testimony from "../components/Testimony";
import GrosCardJouet from "../components/GrosCardJouet";
import CarouselParents from "../components/Carousel";
import {Carousel} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useSelector, useDispatch} from "react-redux";
import * as productAction from '../store/actions/product'




const HomeScreen = () => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(productAction.getProducts())
  }, [dispatch])

  const productArray = product.products
  console.log(productArray)

  if (productArray.length !== 0) {
    console.log(productArray[4].name)
  }


  /*const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function() {
      const product = await getProducts();
      console.log(product.products)
      setProducts(product.products)
    }());
  }, [products])

   */







  const { t, i18n } = useTranslation();

    if (productArray.length === 0) {
      return <h1>Pas de produit disponibles</h1>
    }

    if (productArray.length !==0) {
      return (
        <div>
          <Header/>
          <div className="baby-container">
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/BébéBasAge-MaxAndLeaV.jpg" alt=""
                 className="baby-photo"/>
            <div className="eveil">
              <h1 className="headtitle">{t("HomeScreen.1")}</h1>
              <h2 className="subheadtitle">{t("HomeScreen.2")}</h2>
              <button className="eveil-button">{t("HomeScreen.3")}</button>
            </div>
          </div>
          <div>
            <Garanties/>
          </div>
          <div className="best-jouets" style={{textAlign: 'center', backgroundColor: '#F5F5F5'}}>
            <h1 className="garanties-title">{t("HomeScreen.4")}</h1>
            <div className="products-container">
              <div>
                <GrosCardJouet seller="Best Seller" title={productArray[4].name}
                               description="L'outil d'éveil et d'apprentissage le plus complet pour les enfants de 1 à 6 ans."
                               className="jouet1-img" navigation={"/playboard"}/>
              </div>
              <div>
                <CardJouet title="Le Xylophone" description="Il découvre ses premières notes musicales"
                           className="jouet2-img" navigation="/xylophone"/>
                <CardJouet title="Tour Arc en Ciel" description="Organiser les couleurs et les dégradés"
                           className="jouet2-img" navigation="/tour"/>
              </div>
            </div>
          </div>
          <div className="emerveillement">
            <h1 className="emerveillement-titre">{t("HomeScreen.5")}</h1>
            <button className="emerveillement-button">{t("HomeScreen.6")}</button>
          </div>
          <div>
            <Engagement/>
          </div>
          <div>
            <Testimony/>

          </div>
          <div className="unique">
            <h1 className="unique-title">{t("HomeScreen.7")}<br/> {t("HomeScreen.8")}</h1>
            <div className="photo-enfants">
              <img src="https://maxandlea.com/wp-content/uploads/2020/05/Be%CC%81be%CC%812ans.jpg" alt=""/>
              <img src="https://maxandlea.com/wp-content/uploads/2020/05/FilletteSouriante-1.jpg" alt=""/>
              <img src="https://maxandlea.com/wp-content/uploads/2020/06/Be%CC%81be%CC%81Mouvements-MaxAndLea.jpg"
                   alt=""/>
              <img src="https://maxandlea.com/wp-content/uploads/2020/05/Garcon-assis.jpg" alt=""/>
            </div>
          </div>
          <div className="jouet-emerveillement">
            <h1 className="unique-title">{t("HomeScreen.9")}<br/> {t("HomeScreen.10")}</h1>
            <div className="photos-emerveillement">
              <div className="text-emerveillement">
                <img src="https://maxandlea.com/wp-content/uploads/2020/06/GarconTableau2-MaxAndLea-1.jpg" alt=""/>
                <i className="fas fa-dove"/>
                <p>{t("HomeScreen.11")}</p>
              </div>
              <div className="text-emerveillement">
                <img
                  src="https://maxandlea.com/wp-content/uploads/2020/06/Be%CC%81be%CC%81Allonge%CC%81-2LOGO-MaxAndLea.jpg"
                  alt=""/>
                <i className="fas fa-drafting-compass"/>
                <p>{t("HomeScreen.12")}</p>
              </div>
              <div className="text-emerveillement">
                <img src="https://maxandlea.com/wp-content/uploads/2020/06/4ans-Garc%CC%A7on-MaxAndLea.jpg" alt=""/>
                <i className="fas fa-child"/>
                <p>{t("HomeScreen.13")}</p>
              </div>
              <div className="text-emerveillement">
                <img src="https://maxandlea.com/wp-content/uploads/2020/06/Be%CC%81be%CC%81Machouille-MaxAndLea-1.jpg"
                     alt=""/>
                <i className="fas fa-tree"/>
                <p>{t("HomeScreen.14")}</p>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      )
    }

};

export default HomeScreen
