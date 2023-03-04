import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";

const Vans = () => {
  const [vans] = useState(data);

  const vanElement = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            {van.price}
            <span>/day</span>
          </p>
        </div>
        <b className={`van-type ${van.type}`}>{van.type}</b>
      </Link>
    </div>
  ));

  console.log(data);
  return (
    <div className="vans">
      <h1>Explore our vans options</h1>
      <div className="vans-container">{vanElement}</div>
    </div>
  );
};
export default Vans;
