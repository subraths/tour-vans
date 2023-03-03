import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Vans from "./components/Vans";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
