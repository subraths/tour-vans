import { Suspense, useEffect, useState } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader() {
  return defer({ hostVans: getHostVans() });
}

const HostVans = () => {
  const loaderPromise = useLoaderData();

  const vansListElement = (vans) => {
    const vansElement = vans.map((van) => (
      <Link to={van.id} className="host-van" key={van.id}>
        <img src={van.imageUrl} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <span>${van.price}/day</span>
        </div>
      </Link>
    ));
    return vansElement;
  };

  return (
    <section className="host-vans-container">
      <h2>Your listed vans</h2>
      <Suspense fallback={<span>loading...</span>}>
        <Await resolve={loaderPromise.hostVans}>{vansListElement}</Await>
      </Suspense>
    </section>
  );
};

export default HostVans;
