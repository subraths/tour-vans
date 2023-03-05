import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { vans } = useOutletContext();
  return (
    <>
      <img
        style={{ maxWidth: "200px", borderRadius: "5px" }}
        src={vans.imageUrl}
      />
    </>
  );
};

export default HostVanPhotos;
