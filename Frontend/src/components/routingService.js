import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import ProductsList from "./productslist";

const RoutingService = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/products" element={<ProductsList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RoutingService;
