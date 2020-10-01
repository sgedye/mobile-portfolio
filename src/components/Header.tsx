import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const { pathname } = useLocation();
  const title = pathname.substring(1) || "Home";
  // const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);
  // const toggleNav = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="sticky-top header">
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand className="m-0">
          <Link className="navbar-brand text-info font-weight-bolder" to="/">
            <img
              src="/content/gfx/sg-logo.png"
              alt="SG Logo"
              className="img-fluid w-20"
              />
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="h3 justify-content-center text-uppercase text-dark m-0">
          {title}
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Toggle className=" border-0">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </Navbar.Toggle>
            <Navbar.Toggle className=" border-0">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </Navbar.Toggle>
            <Navbar.Toggle className=" border-0">
              <Link className="nav-link text-white" to="/projects">
                Projects
              </Link>
            </Navbar.Toggle>
            <Navbar.Toggle className=" border-0">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </Navbar.Toggle>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

{/* <nav className="navbar navbar-expand-lg navbar-light  bg-primary">
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
</nav> */}