import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Cart from "../icons/cart.svg";
import React from "react";
import Main from "./main";
import Login from "./login";
import styled from "styled-components";

const Lnk = styled(Link)`
text-decoration: none;
  font-family: Serif;
  ;font-size: 28px;
`;
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            OMAR<br></br>SHOP
            <Lnk to={"/"} element={Main} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} />

          <Nav className="me-auto">
            <Nav.Link href="products">
              <Lnk to={"/products"}>Products</Lnk>
            </Nav.Link>
            <Nav.Link href="account">Account Settings</Nav.Link>
          </Nav>

          <Nav.Link className="login" href="login" onClick={null}>
            <Lnk to={"/login"} element={Login}>
              Login
            </Lnk>
          </Nav.Link>

          <Nav.Link className="shopping-cart" href="#shopping-cart">
            <img
              width={35}
              height={35}
              src={Cart}
              className="bi bi-cart"
              alt={"ShopCart"}
            />
          </Nav.Link>
        </Container>
        <Outlet />
      </Navbar>
    </>
  );
};
export default NavBar;
