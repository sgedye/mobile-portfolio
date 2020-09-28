import * as React from "react";
import { Helmet } from "react-helmet";

export const About = () => (
  <>
    <Helmet>
      <title>about</title>
    </Helmet>
    <main className="container py-3">
      <h1>About</h1>
      <p>This is the about page!</p>
    </main>
  </>
);
