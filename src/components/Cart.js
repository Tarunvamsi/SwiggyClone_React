import React from "react";
import { useSelector } from "react-redux";
import MenuList from "./MenuList";

const Cart = ({ menuItems, openModal }) => {
  const cartItems = useSelector((store) => store.cart.items); //subscribing to store using selector
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold text-5xl">Cart</h1>
    </div>
  );
};

export default Cart;
