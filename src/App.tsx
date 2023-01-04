import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/home/Home";
import Todo from "./components/todoMesseage/Todo";
import Modding from "./routes/modding/Modding";
import SmallAndFun from "./routes/fun/Short&Fun";
import GameDev from "./routes/gamedev/GameDev";
import About from "./routes/about/About";
import Juicebox from "./routes/modding/Juicebox";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modding/*" element={<Modding />}/>
        <Route path="/small&fun/*" element={<SmallAndFun />} />
        <Route path="/gamedev/*" element={<GameDev />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
