import React, {useContext} from 'react';
import Header from "../components/Header";
import {AppContext} from "../context/AppContext";
import {Table} from 'react-bootstrap';
import './CartScreen.css'
import CartItem from "../components/CartItem";

const CartScreen = props => {


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

  const handleRemoveProduct = () => {

  };
  const [cart, setCart] = useContext(AppContext)
  console.log(cart)
  return (
    <div>
      <Header />
      <div className="panier-container">

        { cart ? (
          <div className="container">
            <h1>Votre panier</h1>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th></th>
              <th>Produit</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Sous-total</th>
            </tr>
            </thead>
            <tbody>
            {
              cart.products.length && (
                cart.products.map(item => (
                  <CartItem
                    key={item.productId}
                    item={item}
                    setCart={setCart}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                  )
                )
              )
            }
            <tr className='gras'>
              <div>
                <td className="croix"><button className="button-supp">x</button></td>
                <td><img src="https://maxandlea.com/wp-content/uploads/2020/07/XYLOPHONE-TABS-compress-150x150.jpg" className="cart-image" alt=""/></td>
              </div>
              <td className="rose">Xylophone</td>
              <td>21,90€</td>
              <div className="input-card">
                <button className="decrease-button" onClick={onDecreaseClick}>-</button>
                <input type="text" className="change-quantity" value={1}/>
                <button className="increase-button" style={{color: "#e72c59"}} onClick={onIncreaseClick}>+</button>
              </div>
              <td>21,90€</td>
            </tr>
            <tr>
              <td>
                  <div className="code-promo">
                    <input type="text" className="code-promo-input"/>
                    <div className="cart-button-container">
                      <button className="cart-button">Appliquez le code promo</button>
                    </div>
                  </div>
              </td>
            </tr>
            </tbody>
          </Table>
          </div>
        ): ''}
      </div>
    </div>
  )
};

export default CartScreen;
