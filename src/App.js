import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Pods from "./screens/Pods.jsx";
import PodDetail from "./screens/PodDetail.jsx";
import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [pod, setPod] = useState({})

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pods" element={<Pods setPod={setPod}/>} />
        <Route path="/PodDetail" element={<PodDetail pod={pod} />} />
      </Routes>
    </div>
  );
}

export default App