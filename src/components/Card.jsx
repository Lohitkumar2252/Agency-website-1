import React from "react";
import { useCart } from "../context/CartContext";

const Card = ({ img, category, name, price, bgColor, id, qty }) => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  return (
    <div
      className={`${bgColor} w-full flex flex-col justify-between hover:scale-102 transition-transform duration-200`}
    >
      <div className="img py-8 h-75">
        <img src={img} alt="shoe" className=" w-full h-full object-contain" />
      </div>
      <div
        className="content bg-[#1A1A1A] p-3
                flex flex-col gap-1"
      >
        <p className="text-[#D01A10] uppercase tracking-widest text-sm">
          {category}
        </p>
        <h3 className="text-[#FAFAFA] uppercase font-bold text-2xl lg:text-3xl tracking-wide">
          {name}
        </h3>
        <p className="text-[#888888] tracking-wider">{`₹${price.toLocaleString()}`}</p>
        {cart.some((p) => p.id === id) ? (
          <button
            className=" text-lg  text-center w-full py-2 bg-[#E5281A] uppercase tracking-wider"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: id,
              });
            }}
          >
            remove from cart
          </button>
        ) : (
          <button
            className=" text-lg  text-center w-full py-2 bg-[#E5281A] uppercase tracking-wider"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { id, img, category, name, price, bgColor, qty : 1 },
              });
            }}
          >
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
