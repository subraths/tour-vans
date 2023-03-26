import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Navbar />
    <main style={{ marginBottom: "auto" }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
