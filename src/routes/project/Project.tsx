import { Navigate, useNavigate, useParams } from "react-router-dom";
import projects from "../../projects";

export default function ProjectRoute() {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const project = projects.get(projectName ?? "");
  console.log(projectName, project);
  if (!project) return <Navigate replace to="/" />;

  return <>{project.name}</>;
}
