import "./Home.scss";
import { motion } from "framer-motion";
import TrackVisibility from "react-on-screen";
import { CSSProperties, FC } from "react";
import Tag from "../../components/Tag";
import projects, { Project } from "../project/projects";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <article id="home">
        <Name />
        <AboutMe />
      </article>
    </>
  );
}

function Spacer({ img }: { img: string }) {
  const style: any = {
    "--image": `url(${img})`,
  };

  return <div className="spacer" style={style} />;
}

// Sections
function Name() {
  return (
    <section id="name">
      <h1>
        <Tag ele="h1">Kishan Patel</Tag>
      </h1>
    </section>
  );
}

function AboutMe() {
  const navigate = useNavigate();

  const ProjectJSX: FC<{ proj: Project }> = ({ proj }) => {
    const image = proj.imageURL == "" ? "black" : "url(" + proj.imageURL + ")";
    const style: any = { "--image": image };

    return (
      <li
        style={style}
        className="project"
        onClick={() => navigate(`/project/${proj.shortName}`)}
      >
        <h3 className="name">{proj.name}</h3>
      </li>
    );
  };

  const tech: JSX.Element[] = [];
  projects.forEach((p) => tech.push(<ProjectJSX proj={p} />));

  return (
    <>
      <Spacer img="/images/wave1.svg" />
      <section id="about">
        <div id="about-me-descript">
          <h2>
            <Tag ele="h2">Portfolio</Tag>
          </h2>
          <p>
            <Tag ele="p">
              A gallery of projects of which I'm proud and things I just think
              are cool.
            </Tag>
          </p>
        </div>

        <Tag ele="section" id="project-list-tag">
          <ul id="project-list">{tech}</ul>
        </Tag>
      </section>
    </>
  );
}
