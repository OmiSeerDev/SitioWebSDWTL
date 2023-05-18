import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: 210px;
  height: 364px;
  display: flex;
  flex-direction: column;
  background-color: #ffebcdff;
  border-radius: 20px;
  margin: 16px;
  align-items: center;
`;

const CountingContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Name = styled.div`
  width: 144px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  font-family: Serif, serif;
  color: #0000ff;
`;
const Image = styled.img`
  width: 144px;
  height: 144px;
  margin: 10px 0 10px 0;
  border: 1px solid #3d3d3d;
`;
const Price = styled.div`
  text-align: center;
  width: 60%;
  height: 10%;
  margin: 10px 0;
`;

const SquareButton = styled.button<{
  background: string;
  backgroundHover: string;
  color: string;
}>`
  color: #000000;
  width: 20px;
  height: 20px;
  font-size: 12px;
  //border-radius: 20px;
  font-weight: bold;
  border: 0.2px solid #2f2f2f;
  justify-items: center;
  background-color: ${({ background }) => background}; //#acff97

  :hover {
    background-color: ${({ backgroundHover }) => backgroundHover}; //#34d34d
  }
`;

const Counter = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #000000;
`;

type ProductProps = {
  productName: string;
  imgString: string;
  price: number;
};

const Product = ({
  productName,
  imgString,
  price,
}: ProductProps): JSX.Element => {
  return (
    <Frame>
      <Name>{productName}</Name>
      <Image src={imgString} />
      <Price>
        ${price}
        <br />
        Añadir al carrito
      </Price>
      <CountingContainer>
        <SquareButton background={"#d4ffcc"} backgroundHover={"#34d34d"}>
          +
        </SquareButton>
        <Counter id={"prodCount"} />
        <SquareButton background={"#ff6f6f"} backgroundHover={"#dd0000"}>
          -
        </SquareButton>
      </CountingContainer>
    </Frame>
  );
};

export default Product;
