import React from "react";
import Product from "./product";
import styled from "styled-components";
import { imageSetter } from "./imageSetter";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ProductsList = () => {
  return (
    <div className={"products-list"}>
      <Container>
        <Product
          productName={"Paracetamol"}
          imgString={imageSetter[0]}
        ></Product>
      </Container>
    </div>
  );
};

export default ProductsList;
