import React from 'react';
import './Carousel.css'
import Carousel from 'react-elastic-carousel';
import CardCarousel from "./CardCarousel";
import { Icon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const CarouselParents = () => {


  return (
   <div className="carousel-container">
     <div className="carousel-inner">
    <div className="track">

      <div className="card-container">
        <div className="card">
         <div className="img">1</div>
          <div className="info">Title1</div>
          <div className="avis">decsription</div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">

        </div>
      </div>
      <div className="card-container">
        <div className="card">

        </div>
      </div>
    </div>
     </div>

     <div className="nav">
       <button className="prev"><ArrowBackIosIcon/></button>
       <button className="next"><ArrowForwardIosIcon/></button>
     </div>

   </div>
  )
}



export default CarouselParents;

