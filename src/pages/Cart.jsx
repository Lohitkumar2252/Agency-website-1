import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import CartCard from "../components/CartCard";

const Cart = () => {
  const {
    state: { cart },
  } = useCart();
  
  return (
    <div className="container">
      <div className="top border-b border-b-[#1C1C1C] flex items-center justify-between mt-15 p-5">
        <h1 className="text-[80px] uppercase font-black  tracking-wider ">
          <span className="text-[#E5281A]">c</span>art
        </h1>
        <Link to="/">
          <button
            className={`bg-[#E5281A] transition-colors duration-500 px-8 h-9 border-none outline-none text-white font-bold uppercase tracking-wide self-end cursor-pointer`}
          >
            <img src="/left_arrow.svg" alt="img" className="w-5" />
          </button>
        </Link>
      </div>
      <div className="cards_container grid grid-cols-3 gap-5">
        {cart.map((value) => {
          return (
            <CartCard
              key={value.id}
              bgColor={value.bgColor}
              img={value.img}
              category={value.category}
              name={value.name}
              price={value.price}
              id={value.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
