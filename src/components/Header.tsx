import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = () => {
  const { pathname } = useLocation();
  const title = pathname.substring(1) || "Home";
  return (
    <header className="bg-primary sticky-top header">
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="/">
          <img src="/content/gfx/sg-logo.png" alt="SG Logo" className="img-fluid w-20" />
        </Navbar.Brand>
        <Navbar.Text className="h3 justify-content-center text-uppercase m-0">
          {title}
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link1</Nav.Link>
            <Nav.Link href="#link">Link2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
