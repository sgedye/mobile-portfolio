import * as React from "react";
import { Helmet } from "react-helmet";

export const About = () => (
  <>
    <Helmet>
      <title>about</title>
    </Helmet>
    <main className="container pt-3">
      <section className="d-flex flex-column justify-content-center align-items-center">
        <img
          className="mb-3 rounded"
          src="/content/gfx/me.png"
          alt="Headshot of sgedye"
        />
        <p className="mx-3">
          I believe in writing modular, highly intuitive code, following web
          standards and industry best practices to design responsive,
          mobile-first, pixel-perfect webpages. A great user experience is
          paramount, so creating accessible websites where the branding and the
          'look and feel' are consistent across devices and browsers is a must.
          I'm stimulated by challenges and a love of learning.
        </p>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <strong className="mb-1">Favourite Technologies:</strong>
        <ul className="list-inline">
          <li className="list-inline-item">React</li>
          <li className="list-inline-item">Typescript</li>
          <li className="list-inline-item">Javascript</li>
        </ul>
      </section>
    </main>
  </>
);
