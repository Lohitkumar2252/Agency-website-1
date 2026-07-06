import React, { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
const Cart = createContext();
const CartContext = ({ children }) => {
  const fetchProducts = async () => {
    dispatch({ type: "FETCH_PRODUCTS_START" });
    try {
      const res = await fetch("/products.json");
      if (!res.ok) throw new Error(`Failed to load products (${res.status})`);
      const data = await res.json();
      const normalizedData = data.map((p) => ({
        ...p,
        price: Number(String(p.price).replace(/[^0-9.]/g, "")),
      }));
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: normalizedData });
    } catch (err) {
      dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: err.message });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const defaultState = {
    products: [],
    cart: [],
    productsLoading: true,
    productsError: null,
  };
  const initCart = (defaultState) => {
    try {
      const saved = localStorage.getItem("local_saved_cart");
      if (!saved) return defaultState;

      const parsedCart = JSON.parse(saved);

      return {
        ...defaultState,
        cart: Array.isArray(parsedCart) ? parsedCart : defaultState.cart,
      };
    } catch {
      return defaultState;
    }
  };
  const [state, dispatch] = useReducer(CartReducer, defaultState, initCart);

  useEffect(() => {
    localStorage.setItem("local_saved_cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default CartContext;

export const useCart = () => {
  return useContext(Cart);
};
