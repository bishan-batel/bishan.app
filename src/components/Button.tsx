import React from "react";
import "./Button.scss";
import Tag from "./Tag";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  customWidth?: string;
}

function Button({
  className = "",
  id = "",
  onClick,
  text,
  customWidth,
}: ButtonProps) {
  return (
    <Tag ele="button" className="Button-tag">
      <button className={`Button ${className}`} id={id} onClick={onClick}>
        {text}
      </button>
    </Tag>
  );
}

export default Button;

interface Person {
  name: string;
  age: number;
}

function doSomethng(person: Person) {
  const { name, age } = person;
}

