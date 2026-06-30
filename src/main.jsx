import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Cart from "./pages/Cart.jsx";
import CartContext from "./context/CartContext.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <CartContext>
    <App/>
   </CartContext>
  </BrowserRouter>
);
