import React from 'react';

const Cart = (props) => {
  // console.log(props);
  const {name, price} = props.cart;
  const cart = props.cart;

  const total = cart.reduce((sum, singleCart) => sum + singleCart.price, 0);
  return (
    <div>
      <h2 className='text-primary'>Order Summary</h2>
      <p>Courses Ordered: {cart.length}</p>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;