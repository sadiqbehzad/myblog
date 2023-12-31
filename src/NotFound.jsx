import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
  return (
    <div className="not-found">
      <h3>The page you're looking for is not available!</h3>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default NotFound;
