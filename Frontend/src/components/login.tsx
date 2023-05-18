import React from "react";
import styled from "styled-components";

const Right = styled.div`
  display: flex;
  justify-content: end;
`;

const Container = styled.div`
  position: absolute;
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
const Form = styled.form`
  display: inherit;
  font-weight: bold;
`;
const LoginInput = styled.input<{
  width: string;
}>`
  margin: 10px 0;
  width: ${({ width }) => width};
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
  const [isVisible, dispose] = React.useState(true);
  return (
    dispose && (
      <Right>
        <Container>
          <XButton onClick={isVisible}>X</XButton>
          <Form id="login-form">
            Email
            <LoginInput type="email" id="username" />
            Password
            <LoginInput type="password" id="password" />
            <LoginInput
              class="btn btn-primary"
              width="65px"
              type="submit"
              id="submit"
            />
          </Form>
        </Container>
      </Right>
    )
  );
};
export default Login;
