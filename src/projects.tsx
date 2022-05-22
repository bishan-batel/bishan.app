export interface Project {
  name: string;
  shortName: string;
  imageURL: string;
}

const projects: Map<string, Project> = new Map();
[
  {
    name: "Nita",
    shortName: "nita",
    imageURL:
      "https://cdn.discordapp.com/attachments/946554950580850748/966929361527787520/unknown.png",
  },
].forEach((p: Project) => projects.set(p.shortName, p));

export default projects;
