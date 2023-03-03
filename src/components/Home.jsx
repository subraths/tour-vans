import { Link } from "react-router-dom";

const Home = () => (
  <section>
    <h1>You got the travel plans, we got the travel vans</h1>
    <p>Add adventure to your life by joining the #vanlife movement.</p>
    <p>Rent the perfect van to make your perfect road trip.</p>
    <Link to={"/van"}>Find your van</Link>
  </section>
);

export default Home;
