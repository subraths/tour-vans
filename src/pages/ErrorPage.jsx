import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Sorry, the page you were looking for was not found</h1>
      <Link className="error-page-btn" to="/">
        Return to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
