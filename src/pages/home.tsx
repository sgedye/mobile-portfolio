import * as React from "react";
import { Helmet } from "react-helmet";

export const Home = () => (
  <>
    <Helmet>
      <title>home</title>
    </Helmet>
    <main className="container pt-3">
      <h1>Home</h1>
      <p>This is home!</p>
      This is the main content...
      <br />
      This is the main content...
      <br />
      This is the main content...
      <br />
      This is the main content...
      <br />
      This is the main content...
    </main>
  </>
);
