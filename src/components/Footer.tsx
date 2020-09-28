import * as React from "react";
import { Link } from "react-router-dom";

import "../assets/scss/footer.scss";
import { FooterWave } from "./Footer-Wave";

export const Footer = () => (
  <footer className="fixed-bottom">
    <FooterWave />
    <div className="container-fluid bg-primary p-3">
      <nav className="container social-media-icons w-100 d-flex justify-content-between">
        <Link className="facebook" to="/" />
        <Link className="instagram" to="/about" />
        <Link className="youtube" to="/projects" />
        <Link className="twitter" to="/contact" />
      </nav>
    </div>
  </footer>
);
