import * as React from "react";
import { Helmet } from "react-helmet";

import { projectData } from "../assets/data/projectData";
import { Project } from "../components/Project";

export const Projects = () => (
  <>
    <Helmet>
      <title>projects</title>
    </Helmet>
    <main className="container pt-3">
      {projectData.map(({ title, url, img, blurb }, idx) => (
        <Project key={idx} title={title} url={url} img={img} blurb={blurb} />
      ))}
    </main>
  </>
);
