import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  let totalName = [];
  for (let i = 0; i < cart.length; i++) {
    const user = cart[i];
    totalName = totalName + " | " + user.name + ": salary-$" + user.income;
  }
  const totalIncome = cart.reduce((sum, user) => sum + user.income, 0);
  //   const totalName = cart.reduce((sum, user) => sum + user.name, []);

  return (
    <div className="cart-section">
      <h2>Cart Summary</h2>
      <h5>user added:{cart.length}</h5>
      <h5> {totalName}</h5>
      <p>Total Annual Income: {totalIncome}</p>
    </div>
  );
};

export default Cart;
