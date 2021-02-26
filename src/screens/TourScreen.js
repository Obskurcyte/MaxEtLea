import React from 'react';
import Header from "../components/Header";
import {Col, Row} from "react-bootstrap";
import "./XylophoneScreen.css";
import {Link} from "react-router-dom";

const TourScreen = props => {


  let valueCount = 1;

  const onIncreaseClick = () => {
    valueCount ++;
    document.querySelector('.change-quantity').value = valueCount;
  }

  const onDecreaseClick = () => {
    if (valueCount === 1) {
      return;
    } else {
      valueCount --;
      document.querySelector('.change-quantity').value = valueCount;
    }
  }

  return (
    <div>
      <Header />
      <div className="playboard-container">
        <div className="playboard-description">
          <div className="playboard-images">
            <div className="playboard-image">
              <img src="https://maxandlea.com/wp-content/uploads/2020/06/tour-carre.png" alt=""/>
            </div>
            <div className="playboard-petites-images">
              <Row className="">
                <Col sm={12} md={2} lg={2} xl={2}>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/tour-carre-100x100.png" alt=""/>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4209-100x100.jpg" alt=""/>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4953-logo-100x100.jpg" alt=""/>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4241-100x100.jpg" alt=""/>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/TOUR-ARC-EN-CIEL-HD-01-100x100.jpg" alt=""/>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4180-100x100.jpg" alt=""/>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_5003-logo-100x100.jpg" alt=""/>
                  <img src="https://maxandlea.com/wp-content/uploads/2020/06/PYRAMIDE-MS-01-100x100.jpg" alt=""/>
                </Col>
              </Row>
            </div>
          </div>
          <div className="playboard-total">
            <div className="playboard-rating">
              <h1 className="playboard-title">
                Tour Arc en Ciel
              </h1>
              <div>
                <i className="fas fa-star" />
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
              </div>
            </div>

            <div className="add-panier">
              <div className="input-quantity">
                <button className="decrease-button" onClick={onDecreaseClick}>-</button>
                <input type="text" className="change-quantity" value={1}/>
                <button className="increase-button" style={{color: "#e72c59"}} onClick={onIncreaseClick}>+</button>
              </div>

              <div className="button-add-panier">
                <button>Ajouter au panier</button>
              </div>

              <div className="xylophone-prix">
                <div style={{display: 'flex', flexDirection: 'column'}} className="inner-xylophone">
                  <h5 >19,90€</h5>
                  <p>Seulement 12.90€ avec l’achat de la <a style={{color: '#e72c59'}} href="http://localhost:3000/playboard">PlayBoard</a></p>
                </div>
              </div>
            </div>


            <div className="succes-xylo">
              <p className="description-playboard">
                La pyramide Arc-en-ciel est <span>ludique</span> et <span>éducative</span>. Elle est adaptée au jeune enfant et l’aidera à <span>développer sa concentration</span> ainsi que sa <span>motricité</span> grâce aux anneaux de couleurs vives qui <span>attireront son attention</span>.

                Il aiguisera sa <span>créativité</span> en élaborant différents scénarios de constructions.
              </p>
              <div className="ebookgratuits">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TourScreen;

