import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Content from "pages/Content";
import Home from "pages/Home";
import Write from "pages/Write";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/content/:id" element={<Content />} />
        </Routes>
      </Routers>
      <Footer />
    </>
  );
}

export default App;
