import React from "react";
import "Button.module.scss"

export interface ButtonProps {
  className?: string;
}

export function Button({ className = "" }: ButtonProps) {
  return <button className="Button"></button>;
}
