import { useOutletContext } from "react-router-dom";

const HostVanDetails = () => {
  const [vans, setVans] = useOutletContext();

  console.log(vans);

  return (
    <>
      <p style={{ paddingBottom: "1em" }}>
        <b>Name:</b> {vans.name}
      </p>
      <p style={{ paddingBottom: "1em", textTransform: "capitalize" }}>
        <b>Category:</b> {vans.type}
      </p>
      <p style={{ paddingBottom: "1em" }}>
        <b>Description:</b> {vans.description}
      </p>
      <p style={{ paddingBottom: "1em" }}>
        <b>Visibility:</b> Public
      </p>
    </>
  );
};

export default HostVanDetails;
