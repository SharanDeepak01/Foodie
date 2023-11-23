import React from "react";

export const About = () => {
  return (
    <div className="mt-24 mb-5">
      <div className="flex justify-around">
        <div>
          <h1 className="text-5xl">
            We bring you to <br /> the world of <br />
            <span className="bg-orange-400 border rounded-3xl px-3 shadow-lg text-white">
              Tasty & Fresh Foods
            </span>
          </h1>
          <h4 className="my-4 text-2xl">"Feel proud to be a Foodie 😉"</h4>
        </div>
        <div>
          <img
            className="w-64"
            src="https://foodfire-app.netlify.app/burger-image.ec55d069.png"
            alt="Food Image"
          />
        </div>
      </div>
    </div>
  );
};
