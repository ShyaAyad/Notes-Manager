import { Avatar, Typography } from "antd";
import image from "/public/note-image.svg";
import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";

const {Title} = Typography;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Avatar size="large" src={image} style={{ margin: "15px" }} />
        <Title level={2} style={{ color: "white" }}>
          Notes
        </Title>
      </div>

      <div className="nav-icons">
        <Title level={3}><HomeOutlined className="home-icon"/></Title>
        <Title level={3}><UserAddOutlined className="user-icon"/></Title>
      </div>
      
    </div>
  );
};

export default Navbar;
