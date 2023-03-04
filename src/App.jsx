import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import VanDetail from "./components/VanDetail";
import Vans from "./components/Vans";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
