import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NO_IMAGE_AVAILABLE } from "../constants";
import { ARRAY_OF_MENU_OF_RESTAURANTS } from "../mocks/mockData";
import { addItem } from "../utils/cartSlice";
import { idIndexPair } from "../utils/helper";
import { getMenuFromResID } from "../utils/helper";

// type Menu = {
//   costForTwoMsg: string;
//   avgRatingString: string;
//   cloudinaryImageId: string;
//   menu: {
//     items: { key: { cloudinaryImageId: string; name: string; price: number } };
//   };
//   id: string;
//   name: string;
//   area: string;
//   city: string;
// };

export default function RestaurantMenu() {
  const { resId } = useParams();

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  function addFoodItem(item) {
    if (!cartItems.includes(item)) {
      dispatch(addItem(item));
    } else {
      alert("You have already");
    }
  }

  const test = getMenuFromResID(
    resId,
    ARRAY_OF_MENU_OF_RESTAURANTS,
    idIndexPair
  );

  return !test ? null : (
    <>
      <div className=" flex  p-16 space-x-6 justify-center mt-24 bg-gray-900 text-gray-100">
        <img
          className="h-44 rounded-md"
          src={IMG_CDN_URL + test?.cloudinaryImageId}
        />
        <div className="justify-center space-y-1">
          <h1 className="text-2xl font-semibold ">{test?.name} </h1>
          <h3 className="text-xl">
            📍 {test?.area}, {test?.city}
          </h3>
          <h3 className="text-xl">🌟 {test?.avgRatingString} stars</h3>
          <h3 className="text-xl">🍲 {test?.costForTwoMsg}</h3>
        </div>
      </div>

      <div className=" flex flex-col space-y-2 justify-center items-center">
        <div>
          {Object.values(test?.menu?.items)
            .filter((item) => item.price)
            .map((item) => (
              <div
                key={item.name}
                data-testid="menu"
                className="flex  p-4 m-4 space-x-5 max-w-xl  rounded-lg justify-between "
              >
                <div className="flex space-x-3">
                  <img
                    alt="Error"
                    src={
                      !item.cloudinaryImageId
                        ? NO_IMAGE_AVAILABLE
                        : IMG_CDN_URL + item.cloudinaryImageId
                    }
                    className="w-48 rounded-md "
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-xl">{item.name}</h1>
                    <p className="font-normal">₹ {item.price / 100}</p>
                  </div>
                </div>

                <button
                  onClick={() => addFoodItem(item)}
                  className="bg-green-700 h-10 p-2 px-3 text-white rounded-md mr-0 hover:bg-green-600 "
                >
                  Add
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
