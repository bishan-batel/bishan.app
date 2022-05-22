import React, { FC, ReactNode } from "react";
import "./Tag.scss";

export type TagProps = {
  ele: string;
  children?: ReactNode;
  id?: string;
  className?: string;
};

const Tag: FC<TagProps> = (props) => (
  <span className={`tag ${props.className ?? ""}`} id={props.id ?? ""}>
    <span className="first">
      <span className="operator">&lt;</span>
      <span className="element">{props.ele}</span>
      <span className="operator">&gt;</span>
    </span>
    {props.children}
    <span className="last">
      <span className="operator">&lt;/</span>
      <span className="element">{props.ele}</span>
      <span className="operator">&gt;</span>
    </span>
  </span>
);
export default Tag;
