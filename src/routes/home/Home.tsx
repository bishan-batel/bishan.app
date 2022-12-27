import {
  MouseEventHandler,
  useState,
  createRef,
  ReactNode,
  CSSProperties,
} from "react";
import "./Home.scss";
import Todo from "../../components/todoMesseage/Todo";

export default function Home() {
  return (
    <div id="homepage">
      <Todo />
    </div>
  );
}

function Card() {}
