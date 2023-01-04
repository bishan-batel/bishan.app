import { Link } from "react-router-dom";
import "./PanelList.scss";

interface PanelListProps {
  children: React.ReactNode;
}

export function PanelList({ children, ...rest }: PanelListProps) {
  return (
    <div className="panelList" {...rest}>
      {children}
    </div>
  );
}

export function CardPanel(props: {
  src: string;
  title: string;
  description?: string;
  onClick?: () => void;
  link?: string;
  className?: string;
}) {
  const className = props.className ? `panel ${props.className}` : "panel";

  const Inner = () => (
    <>
      <h2>{props.title}</h2>
      <span>{props.description}</span>
    </>
  );

  const style = {
    "--card-image": `url(${props.src})`,
  } as React.CSSProperties;

  if (props.link == null) {
    return (
      <div className={className} onClick={props.onClick} style={style}>
        <Inner />
      </div>
    );
  } else {
    return (
      <Link to={props.link} className={className} onClick={props.onClick} style={style}>
        <Inner />
      </Link>
    );
  }
}
