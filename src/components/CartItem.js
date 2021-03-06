import React from 'react';

const CartItem = ({item, setCart, handleRemoveProduct}) => {


  return (
    <tr key={item.productId}>
      <th className="cart-element">
        <button onClick={(event) => handleRemoveProduct(event)}>x</button>
      </th>
      <td>
        <td><img src="https://maxandlea.com/wp-content/uploads/2020/07/XYLOPHONE-TABS-compress-150x150.jpg" className="cart-image" alt=""/></td>
      </td>
    </tr>
  )
}

export default CartItem
