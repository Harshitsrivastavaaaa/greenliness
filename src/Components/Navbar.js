import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav className="navStyle">
            <Link to={"/"} className="LS"></Link>
            <Link to={"/greenliness"} className="LS">Home</Link>
            <Link to={"/Signup"} className="LS">Signup</Link>
    </nav>
    </>
    );
}

export default Navbar;