import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-row">
      <Link to="/" className="brandname">
        My-Connect
      </Link>
    </div>
  );
};
export default Nav;
