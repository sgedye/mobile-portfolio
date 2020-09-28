import * as React from "react";
import { Link } from "react-router-dom";

import "../assets/scss/footer.scss";

export const Footer = () => (
  <footer className="container-fluid bg-primary p-3 fixed-bottom">
    <nav className="container social-media-icons w-100 d-flex justify-content-between">
      <Link className="facebook" to="/" />
      <Link className="instagram" to="/about" />
      <Link className="youtube" to="/projects" />
      <Link className="twitter" to="/contact" />
    </nav>
  </footer>
);
