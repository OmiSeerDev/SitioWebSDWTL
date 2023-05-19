import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import ProductsList from "./ProductsList";
import ShoppingCart from "./ShoppingCart";

const RoutingService = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/products" element={<ProductsList />}></Route>
              <Route path="/shopping-cart" element={<ShoppingCart/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RoutingService;
