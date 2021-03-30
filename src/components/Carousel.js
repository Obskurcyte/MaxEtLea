import React from 'react';
import {Carousel} from 'react-bootstrap'
import './Carousel.css'

const CarouselParents = () => {


  return (
    <div>
      <div className="container-fluid">
        <div id="carousel-example" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner row w-100 mx-auto" role="listbox">
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img1"/>
            </div>
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img2"/>
            </div>
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img3"/>
            </div>
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img4"/>
            </div>
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img5"/>
            </div>
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img6"/>
            </div>
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img7"/>
            </div>
            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
              <img src="../assets/childcare.png" className="img-fluid mx-auto d-block" alt="img8"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"/>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"/>
            <span className="sr-only">Next</span>
          </a>
        </div>
    </div>
    </div>
  )
}



export default CarouselParents;

