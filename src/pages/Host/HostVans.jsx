import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/api/host/vans");
    const data = await res.json();
    setVans(data.vans);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const vansElement = vans.map((van) => (
    <Link to={van.id} className="host-van" key={van.id}>
      <img src={van.imageUrl} />
      <div className="host-van-info">
        <h3>{van.name}</h3>
        <span>${van.price}/day</span>
      </div>
    </Link>
  ));

  return (
    <section className="host-vans-container">
      <h2>Your listed vans</h2>
      {vansElement}
    </section>
  );
};

export default HostVans;
