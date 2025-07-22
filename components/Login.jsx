import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="parent-container">
      <div className="form-container">
        <form className="form">
          <h1>
            Login
          </h1>

          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="input-container">
            <label>Password:</label>
            <div style={{position: "relative"}}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <span className="span-field">
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={handleShowPassword}
                />
              </span>
            </div>
          </div>

          <button className="btn">
            Login
          </button>

          <p style={{textAlign: "center"}}>
            Don't have an account?{" "}
            <Link to="/signup" style={{textDecoration: "underline"}}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login