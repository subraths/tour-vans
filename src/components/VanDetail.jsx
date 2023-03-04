import { useParams } from "react-router-dom";
import data from "../data";

const VanDetail = () => {
  const params = useParams();
  const van = data.filter((van) => {
    return van.id == params.id;
  });

  const { id, imageUrl, name, price, description, type } = van[0];
  return (
    <div className="van-detail">
      <img src={imageUrl} />
      <span className={`van-type ${type}`}>{type}</span>
      <h1>{name}</h1>
      <h3>
        ${price}
        <span>/day</span>
      </h3>
      <p>{description}</p>
      <button className="btn-primary">Rent this van</button>
    </div>
  );
};

export default VanDetail;
