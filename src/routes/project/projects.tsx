import React from "react";
import Nita from "./nita/Nita";

export interface Project {
  name: string;
  shortName: string;
  imageURL: string;
  element: React.ReactNode;
}

// used map so I can map routes easier
const projects: Map<string, Project> = new Map();
[
  {
    name: "Nita",
    shortName: "nita",
    imageURL:
      "https://cdn.discordapp.com/attachments/946554950580850748/966929361527787520/unknown.png",
    element: <Nita />,
  },
  {
    name: "Grapher3D",
    shortName: "grapher3D",
    imageURL: "",
    element: <></>,
  },
].forEach((p: Project) => projects.set(p.shortName, p));

export default projects;
