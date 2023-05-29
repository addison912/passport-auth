import { FunctionComponent } from "react";
import profilePic from "../assets/me.jpg";

const Navbar: FunctionComponent = () => {
  return (
    <div className="navbar">
      <span className="logo">Example App</span>
      <ul className="list">
        <li className="listItem">
          <img src={profilePic} alt="profile pic" className="avatar" />
        </li>
        <li className="listItem">Username</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
