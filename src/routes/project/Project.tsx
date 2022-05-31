import { Navigate, useNavigate, useParams } from "react-router-dom";
import projects from "./projects";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar/Navbar";

export default function ProjectRoute() {
  const { projectName } = useParams();
  const project = projects.get(projectName ?? "");
  console.log(projectName, project);
  if (!project) return <Navigate replace to="/" />;

  return <article id={project.shortName}>{project.element}</article>;
}
