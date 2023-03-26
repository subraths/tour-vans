import { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { getHostVans } from "../../../api";

export function loader(obj) {
  return defer({ hostVan: getHostVans(obj.params.id) });
}

const HostVansLayout = () => {
  const styles = {
    color: "#161616",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    fontWeight: "bold",
  };

  const loaderPromise = useLoaderData();

  return (
    <div className="host-van-page-container">
      <Link to=".." relative="path">
        &larr; Back to all vans
      </Link>
      <Suspense fallback={<span style={{ display: "block" }}>loading...</span>}>
        <Await resolve={loaderPromise.hostVan}>
          {(vans) => {
            return (
              <div className="host-van-detail-page-container">
                <div className="host-van-page">
                  <img src={vans.imageUrl} />
                  <div style={{ margin: "auto 0 auto 1em" }}>
                    <span className={`van-type ${vans.type} selected`}>
                      {vans.type}
                    </span>
                    <h2>{vans.name}</h2>
                    <h3>
                      ${vans.price}
                      <span>/day</span>
                    </h3>
                  </div>
                </div>
                <nav style={{ paddingLeft: "0" }}>
                  <NavLink
                    to="."
                    end
                    style={(obj) => (obj.isActive ? styles : null)}
                  >
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
                <Outlet context={{ vans }} />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default HostVansLayout;
