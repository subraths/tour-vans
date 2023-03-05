import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import VanDetail from "./pages/Vans/VanDetail";
import Vans from "./pages/Vans/Vans";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansLayout from "./pages/Host/HostVansLayout/HostVansLayout";
import HostVanDetails from "./pages/Host/HostVansLayout/HostVanDetails";
import HostVanPricing from "./pages/Host/HostVansLayout/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVansLayout/HostVanPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
