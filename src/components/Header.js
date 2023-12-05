import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      <img
        data-testid="logo"
        className="h-20 p-1 mx-2"
        alt="logo"
        src="https://qph.cf2.quoracdn.net/main-qimg-10a502c1604e484739cdb0c3429c3d49-lq"
      />
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center shadow-md bg-white fixed z-10 top-0 left-0 right-0">
      <Title />

      <div className="flex">
        <button className="p-2 hover:text-orange-500">
          <Link to="/">Home</Link>
        </button>
        <button className="p-2 hover:text-orange-500">
          <Link to="/about">About Us</Link>
        </button>
        <button className="p-2 hover:text-orange-500">
          <Link to="/contact">Contact Us</Link>
        </button>
        <ul className="flex py-4 px-4 text-black">
          <li className="px-2 hover:text-orange-500 text-l font-medium">
            <Link to="/cart" data-testid="cart">
              Cart 🛒 ({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
