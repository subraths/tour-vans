import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();

  const [van, setVan] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`/api/vans/${params.id}`);
    const data = await res.json();
    setVan(data.vans);
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <div className="van-detail">
      {van ? (
        <>
          <img src={van.imageUrl} />
          <span className={`van-type ${van.type}`}>{van.type}</span>
          <h1>{van.name}</h1>
          <h3>
            ${van.price}
            <span>/day</span>
          </h3>
          <p>{van.description}</p>
          <button className="btn-primary">Rent this van</button>
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default VanDetail;
