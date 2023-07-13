import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <Link className="navbar_link" to="/">
        Home
      </Link>
      <Link className="navbar_link" to="/articles">
        Articles
      </Link>
      <Link className="navbar_link" to="/topics">
        Topics
      </Link>
    </nav>
  );
}
export default NavBar;
