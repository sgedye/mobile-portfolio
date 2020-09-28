import React from "react";

interface ProjectProps {
  title: string;
  url: string;
  img: string;
  blurb: string;
}

export const Project: React.FC<ProjectProps> = ({ title, url, img, blurb }) => (
  <article className="bg-white p-3 m-3 mb-4 d-flex flex-column align-items-center justify-content-center rounded">
    <h2 className="mb-3">{title}</h2>
    <img className="w-100 mb-3" src={img} alt={title} />
    <p className="mb-3">{blurb}</p>
    <a
      className="btn btn-primary"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </article>
);
