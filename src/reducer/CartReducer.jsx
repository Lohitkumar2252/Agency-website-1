import React from "react";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return { ...state, productsLoading: true, productsError: null };

    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload, productsLoading: false };

    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        productsLoading: false,
        productsError: action.payload,
      };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
