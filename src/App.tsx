import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./routes/home/Home";
import ProjectRoute from "./routes/project/Project";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectName" element={<ProjectRoute/>} />
      </Routes>
    </Router>
  );
}
