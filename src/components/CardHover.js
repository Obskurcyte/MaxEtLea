import React, {useContext} from 'react';
import './CardHover.css'
import {AppContext} from "../context/AppContext";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";


const CardHoverItem = ({item}) => {




  const [cart, setCart] = useContext(AppContext);
  console.log('cart', cart)

  return (

      <div>
          <div className="image-container">
            <img src="https://maxandlea.com/wp-content/uploads/2020/07/XYLOPHONE-TABS-compress-150x150.jpg" alt=""/>
            <div>
              <p>{item.name}</p>
            </div>
            <hr/>
          </div>
        <div>
          Quantité: {item.qty}
        </div>
          <hr/>
      </div>
  )
};


const CardHover = () => {

  const [cart, setCart] = useContext(AppContext);

  let totalPrice1 = 0;
  if (cart) {
    for (let data in cart.products) {
      totalPrice1 += parseFloat(cart.products[data].totalPrice)
    }
  }
  return (
    <div className="hover-container">
      {
        cart.products.length && (
          cart.products.map(item => (
              <CardHoverItem
                item={item}
              />
            )
          )
        )
      }
      <div className="prix-container">
        <p className="subtotal">Sous-total : {totalPrice1} €</p>
        <hr/>
      </div>
      <div className="buttons-container">
        <Link to="/cart" className="link-popper">Voir le panier</Link>
        <Link to="/checkout" className="link-popper">Commander</Link>
      </div>
    </div>
  )

}

export default CardHover;
