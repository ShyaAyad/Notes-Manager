import { Avatar, Typography } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../images/note-logo.jpg"

const {Title} = Typography;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Avatar size="large" src={logo}  style={{ margin: "15px" }} />
        <Title level={2} style={{ color: "white" }}>
          Notes
        </Title>
      </div>

      <div className="nav-icons">
        <Title level={4} className="icon"><HomeOutlined className="home-icon"/>Home</Title>
        <Title level={4} className="icon"><UserOutlined className="user-icon"/>Account</Title>
      </div>
      
    </div>
  );
};

export default Navbar;
