import React from "react";
import contact from "../images/contact2.jpg";

export const Contact = () => {
  return (
    <div className="mt-20 bg-gray-100 justify-between flex p-5">
      <div className="w-2/4 mr-5">
        <img className="w-auto" alt="contact" src={contact} />
      </div>
      <div className="w-1/3">
        <form className="flex flex-col">
          <label className="font-semibold m-1">First Name</label>
          <input
            className="outline-none border shadow-lg rounded-full h-9 pl-3"
            placeholder="Ex.john"
            type="text"
            required
          />
          <label className="font-semibold m-1">Last Name</label>
          <input
            className="outline-none border shadow-lg h-9 rounded-full pl-3"
            placeholder="Ex.Wick"
            type="text"
          />
          <label className="font-semibold m-1">Email Id</label>
          <input
            className="outline-none border shadow-lg h-9 rounded-full pl-3"
            placeholder="xyz@gmail.com"
            type="email"
            required
          />
          <label className="font-semibold m-1">Phone No</label>
          <input
            className="outline-none border shadow-lg h-9 rounded-full pl-3"
            placeholder="+91"
            type="tel"
            pattern="[0-9]{10}"
            required
          />

          <label className="font-semibold m-2">Your Queries</label>
          <input
            className="h-40 outline-none border rounded-lg shadow-lg pb-24 pl-3"
            type="text"
            placeholder="Your Message"
            required
          />
          <button
            onClick={() => alert("Your message is succesfully sent")}
            type="submit"
            className="bg-black border rounded-full hover:bg-gray-700 text-white p-1 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
