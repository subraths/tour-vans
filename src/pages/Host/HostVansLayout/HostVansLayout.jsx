import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVansLayout = () => {
  const params = useParams();

  const [vans, setVans] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`/api/host/vans/${params.id}`);
    const data = await res.json();
    setVans(data.vans[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="host-van-page-container">
      <Link to=".." relative="path">
        &larr; Back to all vans
      </Link>

      <div className="host-van-detail-page-container">
        <div className="host-van-page">
          <img src={vans.imageUrl} />
          <div>
            <span className={`van-type ${vans.type}`}>{vans.type}</span>
            <h2>{vans.name}</h2>
            <h3>
              ${vans.price}
              <span>/day</span>
            </h3>
          </div>
        </div>
        <nav>
          <NavLink
            to="."
            className={({ isActive }) => (isActive ? "active-link" : null)}
            end
          >
            Details
          </NavLink>
          <NavLink
            to={`pricing`}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to={`photos`}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={[vans, setVans]} />
      </div>
    </div>
  );
};

export default HostVansLayout;
