import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const { pathname } = useLocation();
  const title = pathname.substring(1) || "Home";
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);

  const toggleNav = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="sticky-top header">
      <nav className="navbar navbar-expand-lg navbar-light  bg-primary">
        <Link className="navbar-brand text-info font-weight-bolder" to="/">
          <img
            src="/content/gfx/sg-logo.png"
            alt="SG Logo"
            className="img-fluid w-20"
          />
        </Link>
        <h1 className="h3 justify-content-center text-uppercase m-0">
          {title}
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-end`}
          id="topNavBar"
        >
          <Link
            className="nav-link text-center text-white"
            onClick={toggleNav}
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-link text-center text-white"
            onClick={toggleNav}
            to="/about"
          >
            About
          </Link>
          <Link
            className="nav-link text-center text-white"
            onClick={toggleNav}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="nav-link text-center text-white"
            onClick={toggleNav}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* react-bootstrap */}
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </header>
  );
};
