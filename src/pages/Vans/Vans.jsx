import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const loaderPromise = useLoaderData();

  const handleFilterChange = (key, value) => {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };

  return (
    <div className="vans">
      <h1>Explore our vans options</h1>
      <Suspense fallback={<h3>Loading..</h3>}>
        <Await resolve={loaderPromise.vans}>
          {(vans) => {
            const displayedVans = typeFilter
              ? vans.filter((van) => van.type === typeFilter)
              : vans;

            const vanElement = displayedVans.map((van) => (
              <div key={van.id} className="van-tile">
                <Link
                  to={van.id}
                  state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                  }}
                >
                  <img src={van.imageUrl} />
                  <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                      {van.price}
                      <span>/day</span>
                    </p>
                  </div>
                  <b className={`van-type ${van.type} selected`}>{van.type}</b>
                </Link>
              </div>
            ));
            return (
              <>
                <button
                  className={`van-type simple ${
                    typeFilter === "simple" ? "selected" : null
                  }`}
                  onClick={() => handleFilterChange("type", "simple")}
                >
                  Simple
                </button>
                <button
                  className={`van-type rugged ${
                    typeFilter === "rugged" ? "selected" : null
                  }`}
                  onClick={() => handleFilterChange("type", "rugged")}
                >
                  Rugged
                </button>
                <button
                  className={`van-type luxury ${
                    typeFilter === "luxury" ? "selected" : null
                  }`}
                  onClick={() => handleFilterChange("type", "luxury")}
                >
                  Luxury
                </button>
                {typeFilter && (
                  <button
                    className="filter-link-clear"
                    onClick={() => handleFilterChange("type", null)}
                  >
                    Clear Filters
                  </button>
                )}

                <div className="vans-container">{vanElement}</div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
export default Vans;
