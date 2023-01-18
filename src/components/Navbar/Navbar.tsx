import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

function LinkComponent(props: { to: string; children: ReactNode }) {
  // get the current route
  const route = useLocation();

  return (
    <Link
      to={props.to}
      className={`link${route.pathname.startsWith(props.to) ? " active" : ""}`}
    >
      {props.children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav id="navbar">
      <Link id="logo" to={"/"}>
        <img alt="" src="/images/goos.gif" />
        <h1>bishan.app</h1>
      </Link>

      <span className="links">
        <LinkComponent to={"/small&fun"}>Small & Fun</LinkComponent>
        <LinkComponent to={"/gamedev"}>Game Development</LinkComponent>
        <LinkComponent to={"/music"}>Music</LinkComponent>
        <LinkComponent to={"/modding"}>Modding</LinkComponent>
        <LinkComponent to={"/about"}>About</LinkComponent>
      </span>
    </nav>
  );
}
