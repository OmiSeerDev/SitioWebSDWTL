import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: 210px;
  height: 364px;
  display: flex;
  flex-direction: column;
  background-color: blanchedalmond;
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

const Image = styled.img`
  width: 180px;
  height: 180px;
  margin: 30px 0 10px 0;
  border: 1px solid #3d3d3d;
`;
const Description = styled.textarea`
  width: 60%;
  height: 20%;
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
};

const Product = ({ productName, imgString }: ProductProps): JSX.Element => {
  return (
    <Frame>
      <h3>{productName}</h3>
      <Image src={imgString} />
      <Description />
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
