import React from "react";
import styled from "styled-components";
import { Info } from "./ProductsList";

type CartProps = {
  list?: Array<Info>;
};

const CartContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 5px;
`;

const ProductName = styled.span`
  font-weight: bold;
`;

const ProductPrice = styled.span`
  color: #888;
`;

const ShoppingCart = ({ list }: CartProps): JSX.Element => {
  const prodName = list?.map((item) => {
    item.name;
  });
  const prodPrice = list?.map((item) => {
    item.precio;
  });
  return (
    <CartContainer>
      <CartItem>
        <ProductName>{prodName}</ProductName>
        <ProductPrice>{prodPrice}</ProductPrice>
      </CartItem>
    </CartContainer>
  );
};

export default ShoppingCart;
