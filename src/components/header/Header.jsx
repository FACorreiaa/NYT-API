import React from "react";
import "./Header.css";
import * as ReactBootstrap from "react-bootstrap";

function Header() {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand href="/">Main</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link href="/#Main">Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="/#Books">
            Books
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="#pricing">
            Pricing
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default Header;
