import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav className="navStyle">
            <Link to={"/"} className="LS"></Link>
            <Link to={"/greenliness"} className="LS">Home</Link>
            <Link to={"/About"} className="LS">About</Link>
            <Link to={"/Mission"} className="LS">Mission</Link>
            <Link to={"/Vision"} className="LS">Vision</Link>
            <Link to={"/Signup"} className="LS">Signup</Link>
    </nav>
    </>
    );
}

export default Navbar;