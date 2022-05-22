import "./Home.scss";
import { motion } from "framer-motion";
import TrackVisibility from "react-on-screen";
import { CSSProperties, FC } from "react";
import Tag from "../../components/Tag";
import projects, { Project } from "../../projects";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <article id="home">
      <Name />
      <AboutMe />
    </article>
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

  const Tech: FC<{ proj: Project }> = ({ proj }) => {
    const style: any = { "--image": `url(${proj.imageURL})` };

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
  projects.forEach((p) => tech.push(<Tech proj={p} />));

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
      <Spacer img="/images/wave2.svg" />
    </>
  );
}
