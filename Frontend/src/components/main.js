import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Cart from "../icons/cart.svg";
import styled from "styled-components";

const Lnk = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-family: Serif, serif;
  font-size: 28px;
  border: dotted 1px white;
  padding: 5px;
`;

const Main = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            <Lnk to="/">
              Mi Farmacia<br></br>en línea
            </Lnk>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} />

          <Nav className="me-auto">
            <Nav.Link href="products">
              <Lnk to="/products">Products</Lnk>
            </Nav.Link>
            <Nav.Link href="account">
              <Lnk to="/account">Account Settings</Lnk>
            </Nav.Link>
          </Nav>

          <Nav.Link className="login" href="login" onClick={null}>
            <Lnk id={"lgn"} to="/login">
              Login
            </Lnk>
          </Nav.Link>

          <Nav.Link className="shopping-cart" href="#shopping-cart">
            <Lnk to="/shopping-cart">
              <img
                width={35}
                height={35}
                src={Cart}
                className="bi bi-cart"
                alt={"ShopCart"}
              />
            </Lnk>
          </Nav.Link>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
export default Main;
