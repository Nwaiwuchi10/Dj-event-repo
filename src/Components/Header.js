import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaAddressBook, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ background: "#1e2a34" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>EVENT VENDOR</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Event Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  <FaAddressBook /> About Us
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Nav.Link>
                  <FaUserAlt /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
