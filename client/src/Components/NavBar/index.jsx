import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <h2 >SocialApp</h2>
      <div>
        <Link to="/" >Home</Link>
        <Link to="/login" >Login</Link>
        <Link to="/register" >Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;