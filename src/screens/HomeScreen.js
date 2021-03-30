import React, {useContext, useEffect, useState} from 'react';
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
import {AppContext} from "../context/AppContext";
import frerePhoto from '../assets/frere-et-soeur.png';
import playboardPhoto from '../assets/playboard.png';
import bestSeller from '../assets/bestSeller.png';
import tour from '../assets/tour.png';
import xylophone from '../assets/xylophone.png';
import photo100 from '../assets/100.png'
import {Link} from "react-router-dom";
import gif from '../assets/ml.gif';

const HomeScreen = () => {


  let productArray = [];
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(productAction.getProducts())
  }, [dispatch])


  if (product.products) {
    productArray = product.products
  }

  console.log(productArray)

  if (productArray.length !== 0) {
    console.log(productArray[4].name)
  }

  const [ cart, setCart ] = useContext( AppContext );
  console.log('cart', cart)

  const { t, i18n } = useTranslation();

    if (productArray.length === 0) {
      return (
        <div className="gif-container">
          <img src={gif} alt="" className="gif"/>
        </div>)
    }

    if (productArray.length !==0) {
      return (
        <div>
          <Header/>
          <div className="baby-container">
            <div className="head-title-container">
             <h1 className="head-title">{t("HomeScreen1")}<br/> {t("HomeScreen7")}</h1>
            </div>
            <div>
              <p className="description-title">{t("HomeScreen2")}</p>
            </div>
            <div className="baby-photo">
              <img src={frerePhoto} alt="frere et soeur" className="frere-photo"/>
            </div>

            <div className="shop-access">
              <div className="link-shop-container">
               <Link className="link-shop">{t("HomeScreen3")}</Link>
              </div>
            </div>
          </div>
          <div>
            <Garanties/>
          </div>
          <div className="best-jouets" style={{textAlign: 'center', backgroundColor: '#F5F5F5'}}>
            <h1 className="best-jouets-title">{t("HomeScreen4")}</h1>
            <div className="products-container">
              <div className="playboard-container">
                <h2 className="playboard-title1">PLAYBOARD</h2>
                <p className="playboard-description1">L'outil d'éveil et d'apprentissage le plus complet pour les enfants de 1 à 6 ans</p>
                <div className="playboard-image-container">
                  <img src={playboardPhoto} alt="playboard" className="playboard-image1"/>
                </div>
                <div className="best-seller-image-container">
                  <img src={bestSeller} alt="best-seller" className="best-seller-image"/>
                </div>
                <div className="shop-access2">
                  <div className="link-shop-container">
                    <Link className="link-shop">VOIR PRODUIT</Link>
                  </div>
                </div>
              </div>

              <div className="other-products-container">

                <div className="xylophone-container">
                  <h2 className="xylophone-title">XYLOPHONE</h2>
                  <p className="xylophone-description">Il découvre ses premières notes de musique</p>
                  <div className="xylophone-image-container">
                    <img src={xylophone} alt="xylophone" className="xylophone-image"/>
                  </div>
                  <div className="shop-access3">
                    <div className="link-shop-container">
                      <Link className="link-shop">VOIR PRODUIT</Link>
                    </div>
                  </div>
                </div>

                <div className="tour-container">
                  <h2 className="tour-title">TOUR ARC EN CIEL</h2>
                  <p className="xylophone-description">Organiser les couleurs et les dégradés</p>
                  <div className="tour-image-container">
                    <img src={tour} alt="xylophone" className="tour-image"/>
                  </div>
                  <div className="shop-access3">
                    <div className="link-shop-container">
                      <Link className="link-shop">VOIR PRODUIT</Link>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="emerveillement">
            <h1 className="emerveillement-titre">JE VEUX EMERVEILLER MES ENFANTS</h1>
            <div className="shop-access">
              <div className="link-shop-container">
                <Link className="link-shop">ACCEDER AU SHOP</Link>
              </div>
            </div>
          </div>
          <div>
            <Engagement/>
          </div>

          <div>
            <Testimony/>
          </div>

          <Footer/>
        </div>
      )
    }

};

export default HomeScreen
