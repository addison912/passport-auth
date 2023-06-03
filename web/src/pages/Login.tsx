import { FunctionComponent } from "react";
import Google from "../assets/Google.png";
import Github from "../assets/Github.png";
import Facebook from "../assets/Facebook.png";
import { Link } from "react-router-dom";

const Login: FunctionComponent = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="loginTitle">Login</h1>
        <div className="loginInputs">
          <div className="left">
            <Link
              to={"http://localhost:5000/auth/google"}
              className="socialLoginButton"
            >
              <img src={Google} alt="Google" className="icon" />
            </Link>
            <Link
              to={"http://localhost:5000/auth/github"}
              className="socialLoginButton"
            >
              <img src={Github} alt="Github" className="icon" />
            </Link>
            <Link
              to={"http://localhost:5000/auth/facebook"}
              className="socialLoginButton"
            >
              <img src={Facebook} alt="Facebook" className="icon" />
            </Link>
          </div>
          <center className="center">
            <div className="centerline" />
            <div className="or">OR</div>
            <div className="centerline" />
          </center>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
