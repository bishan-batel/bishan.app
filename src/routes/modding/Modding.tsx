import Twemoji from "react-twemoji";
import { PanelList, CardPanel } from "../../components/PanelList/PanelList";
import Todo from "../../components/todoMesseage/Todo";
import "./Modding.scss";
import {
  Link,
  Route,
  Routes,
  useResolvedPath,
  useRoutes,
} from "react-router-dom";
import Juicebox from "./Juicebox";

const ModList = () => {
  const panels = [
    <CardPanel
      src="/images/screenshots/tintedbeacons.webp"
      title="Tinted Beacons"
      description="A minecraft mod that adds a new transparent beacon effect when using tinted glass"
      link=""
      onClick={() => window.open("https://modrinth.com/mod/tinted-beacons")}
    />,
    <CardPanel
      src="/images/screenshots/juicebox.png"
      title="Juicebox"
      description="Specialized minecraft plugin with dumb features"
      link="juicebox"
    />,
  ];

  return (
    <div id="modList">
      <Link to="/modding" id="moddingHeader">
        <h1>Modding</h1>
      </Link>
      <Twemoji>Typically minecrafter cause I'm a gamer 😎</Twemoji>
      <PanelList>{panels}</PanelList>
    </div>
  );
};

export default function Modding() {
  return (
    <main id="modding" className="page">
      <Routes>
        <Route path="juicebox" element={<Juicebox />} />
        <Route index element={<ModList />} />
      </Routes>
    </main>
  );
}
