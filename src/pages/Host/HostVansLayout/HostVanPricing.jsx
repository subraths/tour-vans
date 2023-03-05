import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { vans } = useOutletContext();

  return (
    <div style={{ fontSize: "1.25rem" }}>
      <b>${vans.price}</b>
      <span style={{ fontSize: "1rem", color: "#4D4D4D" }}>/day</span>
    </div>
  );
};

export default HostVanPricing;
