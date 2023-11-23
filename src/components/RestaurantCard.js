import React from "react";
import { IMG_CDN_URL, NO_IMAGE_AVAILABLE } from "../constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="w-56 p-4 m-3 h-72 border border-gray-100 bg-gray rounded-md shadow-lg hover:shadow-none bg-gray-50 pb-6  ">
      <img
        className="rounded-md"
        src={
          !cloudinaryImageId
            ? NO_IMAGE_AVAILABLE
            : IMG_CDN_URL + cloudinaryImageId
        }
      />

      <h2 className="text-xl font-semibold py-1">{name}</h2>
      <h3 className="cuisines text-sm text-gray-500 ">
        {cuisines.slice(0, 4).join(", ")}
      </h3>
      <h4 className="distance text-sm font-semibold">
        🚀 {lastMileTravelString} away
      </h4>
      <div className="flex justify-between items-center mt-2">
        {+avgRating > 4 ? (
          <span className="text-sm rounded-3xl bg-green-500  p-1 px-2 text-white">
            ⭐ {avgRating}
          </span>
        ) : (
          <span className="text-sm rounded-3xl bg-red-500  p-1 px-2 text-white">
            ⭐ {avgRating}
          </span>
        )}
        <h4 className="text-xs font-medium">{costForTwoString}</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
