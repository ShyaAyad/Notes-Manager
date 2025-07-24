import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Typography, Form } from "antd";

const { Title } = Typography;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-form">
      <div className="form-container">
        <Title>Log in</Title>
        <Form layout="vertical">
          <Form.Item
            label={<Title level={4}>Email</Title>}
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item
            label={<Title level={4}>Password</Title>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              suffix={
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={handleShowPassword}
                  style={{ cursor: "pointer" }}
                />
              }
            />
          </Form.Item>

          <div className="btn-text">
            <Title level={4}>
              Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: "underline" }}>
                Register
              </Link>
            </Title>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
