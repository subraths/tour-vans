import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVansLayout = () => {
  const params = useParams();

  const [vans, setVans] = useState([]);

  const styles = {
    color: "#161616",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    fontWeight: "bold",
  };

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
          <div style={{ margin: "auto 0 auto 1em" }}>
            <span className={`van-type ${vans.type}`}>{vans.type}</span>
            <h2>{vans.name}</h2>
            <h3>
              ${vans.price}
              <span>/day</span>
            </h3>
          </div>
        </div>
        <nav style={{ paddingLeft: "0" }}>
          <NavLink to="." end style={(obj) => (obj.isActive ? styles : null)}>
            Details
          </NavLink>
          <NavLink
            to={`pricing`}
            style={(obj) => (obj.isActive ? styles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to={`photos`}
            style={(obj) => (obj.isActive ? styles : null)}
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
