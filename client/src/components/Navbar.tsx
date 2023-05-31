import { FunctionComponent } from "react";
import profilePic from "../assets/me.jpg";
import { Link } from "react-router-dom";

interface NavbarProps {
  user: boolean;
}

const Navbar: FunctionComponent<NavbarProps> = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/">ExampleApp</Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={profilePic} alt="profile pic" className="avatar" />
          </li>
          <li className="listItem">Username</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
