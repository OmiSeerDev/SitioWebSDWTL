import React from "react";
import styled from "styled-components";

const Right = styled.div`
  display: flex;
  justify-content: end;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 30%;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 200px;
  background: linear-gradient(100deg, rgb(48, 70, 189), rgba(3, 3, 3, 0.2));
  border-radius: 8px;
  color: #000000;
`;
const XButton = styled.button`
  position: relative;
  height: 30px;
  width: 30px;
  background-color: black;
  color: #ffadad;
  left: 333px;
  bottom: 75px;
  border-radius: 30px;
`;

const Login = () => {
  return (
    <Right>
      <Container>
        <XButton>X</XButton>
        <form id="login-form">
          Email
          <input type="email" id="username" />
          Password
          <input type="password" id="password" />
          <input type="submit" id="submit" />
        </form>
      </Container>
    </Right>
  );
};
export default Login;
