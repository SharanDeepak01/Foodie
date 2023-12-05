import React from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

export default function FoodItem({ name, cloudinaryImageId, price, id }) {
  const dispatch = useDispatch();

  function remove() {
    dispatch(removeItem(id));
  }
  return (
    <>
      <div className="w-56 p-4 m-3 h-68 border border-gray-100 bg-gray rounded-md hover:shadow-lg bg-gray-50 ">
        <img
          className="rounded-md drop-shadow-sm"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2 className=" text-md font-semibold py-1">{name}</h2>
        <h2>₹ {price / 100}</h2>
        <button
          onClick={() => remove()}
          className="bg-red-500 text-white p-1 rounded-lg mt-2"
        >
          Remove
        </button>
      </div>
    </>
  );
}
