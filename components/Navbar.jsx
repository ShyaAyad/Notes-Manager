import { Avatar, Typography } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../images/note-logo.jpg";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo">
          <Avatar size="large" src={logo} style={{ margin: "15px" }} />
          <Title level={2} style={{ color: "white" }}>
            Notes
          </Title>
        </Link>
      </div>

      <div className="nav-icons">
        <Link to="/dashboard" style={{textDecoration: "none"}}>
          <Title level={4} className="icon">
            <HomeOutlined className="home-icon" />
            Home
          </Title>
        </Link>
        <Link to="login" style={{textDecoration: "none"}}>
          <Title level={4} className="icon">
            <UserOutlined className="user-icon" />
            Account
          </Title>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
