import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-form">
      <div className="form-container">
        <Title>Sign up</Title>

        <Form layout="vertical">
          <Form.Item
            label={<Title level={4}>Username</Title>} // like regular <label> component 
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]} // will alert user to fill the reqired fileds
          >
            <Input placeholder="Username" />
          </Form.Item>

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
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "underline" }}>
                Login
              </Link>
            </Title>

            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
