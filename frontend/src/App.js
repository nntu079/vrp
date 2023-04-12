import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inbound from "./pages/inbound";
import Outbound from "./pages/outbound";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbound />} />
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/outbound" element={<Outbound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
