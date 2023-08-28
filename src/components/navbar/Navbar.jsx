import "./Navbar.scss";
import logo from "../../helpers/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="europe" width="100px" />
      </div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
