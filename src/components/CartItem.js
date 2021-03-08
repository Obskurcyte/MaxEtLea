import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as productAction from "../store/actions/product";


const CartItem = ({item, setCart, handleRemoveProduct}) => {





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



  const [productCount, setProductCount] = useState(item.qty);

  const handleQtyChange = (event) => {
    if (process.browser) {
      const newQty = event.target.value
      setProductCount(newQty)

      let existingCart = localStorage.getItem('woo-next-cart');
      existingCart = JSON.parse(existingCart);

   //   const updatedCart = updateCart(existingCart, item, false, newQty)
    }
  //  setCart(updateCart)
  }


  return (
    <tr key={item.productId} className="tr-product">
      <th className="cart-element">
      <span onClick={(event) => handleRemoveProduct(event)}>
        <i className="fa fa-times-circle"></i>
      </span>
      </th>
      <td>
        <td><img src="https://maxandlea.com/wp-content/uploads/2020/07/XYLOPHONE-TABS-compress-150x150.jpg" className="cart-image" alt=""/></td>
      </td>
      <td>
        {item.name}
      </td>
      <td>
        {item.price.toFixed(2)}
      </td>
      <td>
        <div className="input-card">
          <input
            type="number"
            className="cart-input"
            value={productCount}
            onChange={handleQtyChange}
          />
        </div>
      </td>
      <td>
        {item.totalPrice}
      </td>
    </tr>
  )
}

export default CartItem
