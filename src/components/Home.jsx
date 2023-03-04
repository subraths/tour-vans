import { Link } from "react-router-dom";

const Home = () => (
  <div className="hero-container">
    <section>
      <h1>You got the travel plans, we got the travel vans</h1>
      <p>Add adventure to your life by joining the #vanlife movement.</p>
      <p>Rent the perfect van to make your perfect road trip.</p>
      <Link to={"/vans"} className="link-btn">
        Find your van
      </Link>
    </section>
  </div>
);

export default Home;
