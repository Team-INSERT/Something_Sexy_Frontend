import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Content from "./pages/Content";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/content/:id" element={<Content />} />
      </Routes>
    </Routers>
  );
}

export default App;
