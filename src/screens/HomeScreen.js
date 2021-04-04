import React, {useContext, useEffect, useState} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Garanties from "../components/GarantiesMaxEtLea";
import Engagement from "../components/Engagement";
import CardJouet from "../components/CardJouet";
import {Container, Row, Col, Card} from 'react-bootstrap'
import './HomeScreen.css';
import CarouselParents from "../components/Carousel";
import {useTranslation} from "react-i18next";
import {useSelector, useDispatch} from "react-redux";
import * as productAction from '../store/actions/product'
import {AppContext} from "../context/AppContext";
import playboardPhoto from '../assets/playboard.png';
import bestSeller from '../assets/bestSeller.png';
import tour from '../assets/tour.png';
import xylophone from '../assets/xylophone.png';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import playboardPhotoCard from '../assets/playboardCard (1).png'
import CardContent from '@material-ui/core/CardContent';
import tourCard from '../assets/tourCard.png'
import xylophoneCard from '../assets/xylophoneCard.png'

const HomeScreen = () => {


  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
  }));

  const classes = useStyles();
  const [ cart, setCart ] = useContext( AppContext );
  console.log('cart', cart)

  const { t, i18n } = useTranslation();


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


            <div className="grid-container">

              <div className="row-card-home">


                <Card className="card-jouet playboard">
                  <Link to="playboard">
                    <p className="card-jouet-title" color="textSecondary" >
                      PLAYBOARD
                    </p>
                    <img src={playboardPhotoCard} alt="" className="img-card"/>
                  </Link>
                </Card>



                <Card className="card-jouet tour">
                  <Link to="/tour">
                    <p className="card-jouet-title" color="textSecondary">
                      TOUR ARC EN CIEL
                    </p>
                    <img src={tourCard} alt="" className="img-card"/>
                  </Link>
                </Card>
              </div>

              <div className="row-card-home">

                <Card className="card-jouet xylophone">
                  <Link to="/xylophone">
                    <p className="card-jouet-title" color="textSecondary">
                      XYLOPHONE
                    </p>
                    <img src={xylophoneCard} alt="" className="img-card"/>
                  </Link>
                </Card>



                <Card className="card-jouet bidule">
                  <Link to="/playboard">
                    <p className="card-jouet-title" color="textSecondary">
                      BIDULE
                    </p>
                    <img src={playboardPhotoCard} alt="" className="img-card"/>
                  </Link>
                </Card>


              </div>

              <div className="row-card-home">


                <Card className="card-jouet bidule2">
                  <Link to="/playboard">
                    <p className="card-jouet-title" color="textSecondary">
                      BIDULE 2
                    </p>
                    <img src={playboardPhotoCard} alt="" className="img-card"/>
                  </Link>
                </Card>


                <Card className="card-jouet bidule3">

                  <Link to="/playboard">
                    <p className="card-jouet-title" color="textSecondary">
                      TOUR ARC EN CIEL
                    </p>
                    <img src={playboardPhotoCard} alt="" className="img-card"/>
                  </Link>
                </Card>


              </div>

              <div className="row-card-home-special">


                <Card className="card-jouet bidule4">
                  <Link to="/playboard">
                    <p className="card-jouet-title" color="textSecondary">
                      BIDULE 4
                    </p>
                    <img src={playboardPhotoCard} alt="" className="img-card"/>
                  </Link>
                </Card>



              </div>

            </div>

            </div>

          <div>
            <Garanties/>
          </div>

          <div>
            <Engagement/>
          </div>

          <Footer/>
        </div>
      )

};

export default HomeScreen
