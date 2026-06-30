import React, { createContext, useContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
const Cart = createContext();
const CartContext = ({ children }) => {
  const products = [
    {
      img: "/hero_red.png",
      category: "running",
      name: "air phantom",
      price: "₹12,995",
      bgColor: "bg-[#1A0A08]",
      id: 1,
    },
    {
      img: "/hero_blue.png",
      category: "training",
      name: "react flux 4",
      price: "₹9,495",
      bgColor: "bg-[#0A0F1A]",
      id: 2,
    },
    {
      img: "/hero_yellow.png",
      category: "lifestyle",
      name: "court vision low",
      price: "₹7,295",
      bgColor: "bg-[#19180c]",
      id: 3,
    },
  ];

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default CartContext;

export const useCart = () => {
  return useContext(Cart);
};
