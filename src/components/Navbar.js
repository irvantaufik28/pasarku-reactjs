import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/icon/logo.png";
import Styles from "./styles/navbar.module.css";
function NavbarTop() {
  return (
    <div>
      <Navbar className={Styles.header}>
        <Container className= {Styles.container} >
          <Navbar.Brand href="/">
            {" "}
            <img className={Styles.logo} src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className={Styles.topmenu}>
            <Nav.Link href="/">Homepage</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={Styles.cart} >
        <FaShoppingCart />
      </div>
    </div>
  );
}

export default NavbarTop;
