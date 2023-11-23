import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-36 ">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-44 h-44 m-5 bg-gray-400"></div>
        ))}
    </div>
  );
};
export default Shimmer;
