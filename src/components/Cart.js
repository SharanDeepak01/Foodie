import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  function emptyCart() {
    dispatch(clearCart());
  }
  console.log(cartItems);
  return (
    <div className="mb-28">
      <div className=" flex mt-24 ">
        <h1 className="text-3xl font-semibold p-2">
          Cart ({cartItems.length})
        </h1>
        <button
          className="p-2 m-2 bg-orange-400 text-white rounded-md"
          onClick={() => emptyCart()}
        >
          Clear Cart
        </button>
      </div>

      {!cartItems.length ? (
        <h1 className="text-3xl m-3">
          Your cart is empty add few delicious items now 🍔
        </h1>
      ) : (
        <div className="flex">
          {cartItems.map((item) => {
            return <FoodItem {...item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}
