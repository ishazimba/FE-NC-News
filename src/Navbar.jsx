import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </>
  );
}
export default Navbar;
