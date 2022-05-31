import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav id="project-nav">
      <Link id="home-logo" to="/">
        <img
          alt="Home"
          src="https://cdn.discordapp.com/attachments/821994443964022814/850072716752453693/pride_kishan_jojoart.png"
        />
        <span>bishan.app</span>
      </Link>
    </nav>
  );
}
