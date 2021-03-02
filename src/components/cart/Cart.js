import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  let totalSalary= 0;
  for (let i = 0; i < cart.length; i++) {
    const player = cart[i];
    totalSalary = totalSalary + (player.salary);
    
  }
  return (
    <div>
      <h4>Total Player: {cart.length}</h4>
      <p>Total Salary: {totalSalary}</p>
    </div>
  );
};

export default Cart;