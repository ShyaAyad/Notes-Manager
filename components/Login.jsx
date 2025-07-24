import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Typography } from "antd";

const { Title } = Typography;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-form">
      <div className="form-container">
        <h1>Log in</h1>
        <form>
          <div className="input-container">
            <Title level={4}>Email</Title>
            <Input placeholder="Email" type="email" />
          </div>
          <div className="input-container">
            <Title level={4}>Password</Title>
            <Input
              placeholder="Email"
              type={showPassword ? "text" : "password"}
            />
            <span className="span-field">
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                onClick={handleShowPassword}
              />
            </span>
          </div>
          <div className="btn-text">
            <Title level={4}>
              Don't have an account? <Link to="/register" style={{textDecoration: "underline"}}>Register</Link>
            </Title>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
