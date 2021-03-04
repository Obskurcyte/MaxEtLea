import React, {useEffect, useContext, useState} from 'react';
import Header from "../components/Header";
import {Col, Row} from "react-bootstrap";
import "./XylophoneScreen.css";
import {useSelector, useDispatch} from "react-redux";
import * as productAction from '../store/actions/product';
import {Link} from "react-router-dom";

import {AppContext} from "../context/AppContext";

const XylophoneScreen = props => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const cart = useSelector(state => state.product)

  const [carty, setCart] = useState(cart)
  useEffect(() => {
    dispatch(productAction.getProducts())
  }, [dispatch])


  useEffect(() => {
    dispatch(productAction.getProductsLocal())
  }, [dispatch])


  const productArray = product.products

 // const [cart, setCart] = useContext(AppContext);

  console.log(cart)

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



  const getFloatVal = (string) => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)): '';
  }

  const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price)

    let newCart = {
      products: [],
      totalProductCount: 1,
      totalProductsPrice: productPrice
    }

    const newProduct = createNewProduct(product, productPrice, 1)
    newCart.products.push(newProduct);
    localStorage.setItem('woo-next-cart', JSON.stringify(newCart));
    return newCart
  };

  const createNewProduct = (product, productPrice, qty) => {
    return {
      productId: product.id,
      name: product.name,
      price: productPrice,
      qty: qty,
      totalPrice: parseFloat((productPrice * qty).toFixed(2))
    }

  };

  const handleAddToCart = () => {
    if (process.browser) {
      let existingCart = localStorage.getItem('woo-next-cart');
      console.log('clicked')
      console.log(existingCart)
      if (existingCart) {
        setCart(existingCart)
        console.log(cart)
      } else {
          const newCart = addFirstProduct(productArray[2]);
          setCart(newCart)
      }
    }
  }


  if (productArray.length === 0) {
    return <h1>Pas de produit disponibles</h1>
  }

  if (productArray.length !==0) {
    return (
      <div>
        <Header/>
        <div className="playboard-container">
          <div className="playboard-description">
            <div className="playboard-images">
              <div className="playboard-image">
                <img src="https://maxandlea.com/wp-content/uploads/2020/07/XYLOPHONE-TABS-compress.jpg" alt=""/>
              </div>
              <div className="playboard-petites-images">
                <Row className="">
                  <Col sm={12} md={2} lg={2} xl={2}>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/07/XYLOPHONE-TABS-compress-100x100.jpg"
                         alt=""/>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4209-100x100.jpg" alt=""/>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4211-100x100.jpg" alt=""/>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4218-100x100.jpg" alt=""/>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4221-100x100.jpg" alt=""/>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/06/XYLOPHONE-HD-2-100x100.jpg" alt=""/>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/06/XYLOPHONE-HD-2-100x100.jpg" alt=""/>
                    <img src="https://maxandlea.com/wp-content/uploads/2020/06/IMG_4189-100x100.jpg" alt=""/>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="playboard-total">
              <div className="playboard-rating">
                <h1 className="playboard-title">
                  Xylophone
                </h1>
                <div>
                  <i className="fas fa-star"/>
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
                  <button onClick={handleAddToCart}>Ajouter au panier</button>
                </div>

                <div className="xylophone-prix">
                  <div style={{display: 'flex', flexDirection: 'column'}} className="inner-xylophone">
                    <h5>21,90€</h5>
                    <p>Seulement 14.90€ avec l’achat de la <a style={{color: '#e72c59'}}
                                                              href="http://localhost:3000/playboard">PlayBoard</a></p>
                  </div>
                </div>
              </div>


              <div className="succes-xylo">
                <p className="description-playboard">La musique est fondamentale pour la <span>croissance du jeune enfant.</span> Grâce
                  à ce Xylophone, votre petit va découvrir ses <span>premières notes musicales</span> et
                  développer <span>sa capacité auditive. </span>
                  Cultiver <span>son intérêt pour la musique</span>, encourager ses premiers essais musicaux c’est avant
                  tout développer <span>sa créativité</span> et <span>son imagination.</span></p>
                <div className="ebookgratuits">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default XylophoneScreen;
