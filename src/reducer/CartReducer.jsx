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
    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload.id && i.qty < 10
            ? { ...i, qty: i.qty + 1 }
            : i,
        ),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload.id && i.qty > 1
            ? { ...i, qty: i.qty - 1 }
            : i,
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

export default CartReducer;
