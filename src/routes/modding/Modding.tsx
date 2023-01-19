import Twemoji from "react-twemoji";
import {PanelList, CardPanel} from "../../components/PanelList/PanelList";
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
            onClick={() => window.open("https://modrinth.com/mod/tinted-beacons")}
        />,
        <CardPanel
            src="data:image/jpeg;base64,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"
            title="Juicebox"
            description="Specialized minecraft plugin with dumb features"
            // link="juicebox"
            onClick={() => {
                window.open("https://github.com/bishan-batel/juicebox")
            }}
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
                {/*<Route path="juicebox" element={<Juicebox />} />*/}
                <Route index element={<ModList/>}/>
            </Routes>
        </main>
    );
}
