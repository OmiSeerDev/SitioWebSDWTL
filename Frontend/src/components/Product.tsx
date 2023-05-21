import React from "react";
import styled from "styled-components";
import axios from "axios";
import routes from "../constants/routes";
import { Cart } from "../constants/types";

const Frame = styled.div`
  width: 210px;
  height: 364px;
  display: flex;
  flex-direction: column;
  background-color: #ffebcdff;
  border-radius: 20px;
  margin: 10px;
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
  display: flex;
  background-color: #ffffff;
  border: 1px solid #000000;
  justify-content: center;
  align-items: center;
`;

type ProductProps = {
  productName: string;
  imgString: string;
  price: number;
  counter?: number;
};

const Product = ({
  productName,
  imgString,
  price,
}: ProductProps): JSX.Element => {
  let [counter, setCount] = React.useState<number>(0);
  let [cart, createdCart] = React.useState<boolean>(false);

  type CartResponseProps = {
    cart?: Cart;
    error?: { message: string };
  };
  const addToCartAsync = async (
    product: string
  ): Promise<CartResponseProps> => {
    try {
      product = productName;
      setCount(counter + 1);
      let name = await axios.get(`${routes.get.products}/name/${product}`);
      const currentCart = await axios.post<Cart>(`${routes.post.cart}`, name);
      return { cart: currentCart.data };
    } catch (e) {
      return { error: { message: "Error creating cart" } };
    }
  };
  function remove() {
    setCount(counter - 1);
    if (counter <= 0) {
      setCount(0);
    }
  }
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
        <SquareButton
          background={"#d4ffcc"}
          backgroundHover={"#34d34d"}
          onClick={addToCartAsync}
        >
          +
        </SquareButton>
        <Counter id={"prodCount"}>{counter}</Counter>
        <SquareButton
          background={"#ff6f6f"}
          backgroundHover={"#dd0000"}
          onClick={remove}
        >
          -
        </SquareButton>
      </CountingContainer>
    </Frame>
  );
};

export default Product;
