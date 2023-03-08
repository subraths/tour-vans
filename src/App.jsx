import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import VanDetail from "./pages/Vans/VanDetail";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
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
import NotFoundPage from "./components/NotFoundPage";
import ErrorPage from "./components/ErrorPage";
import SignIn, { action as loginAction } from "./pages/SignIn";
import AuthRequired from "./pages/AuthRequired";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<SignIn />} action={loginAction} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<ErrorPage />}
        />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route element={<AuthRequired />}>
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
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
