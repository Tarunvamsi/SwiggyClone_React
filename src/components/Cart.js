import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import { MENU_IMG_ID } from "../../utils/constants";
import MenuList from "./MenuList";
import { clearCart } from "../../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = ({ menuItems, openModal }) => {
  const cartItems = useSelector((store) => store.cart.items); //subscribing to store using selector
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = (cartItems) => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold text-5xl">Cart</h1>
      <div>
        <button
          className="px-4 py-3 m-4 bg-orange-400 rounded-lg font-bold text-lg"
          onClick={handleClearCart}
        >
          clear cart
        </button>
        {cartItems.length === 0 && (
          <div className=" items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="cart-empty"
              className="h-60 w-60 m-auto"
            />
            <h1 className="text-2xl m-4 p-4 font-medium ">
              Your cart is empty📪..Add some items to the cart🛒 !!
            </h1>
            <h2 className="text-1xl   ">
              You can go to home page to view more restaurants
            </h2>
            <Link to="/">
              <button className="m-4 p-4 bg-green-400 rounded-lg font-bold text-lg ">
                Go to Home
              </button>
            </Link>
          </div>
        )}
        <MenuList menuItems={cartItems}></MenuList>
      </div>
    </div>
  );
};

export default Cart;
