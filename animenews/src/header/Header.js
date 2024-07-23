import React, { useState } from "react";
import "./Header.css";
import { Menu, Input, Row, Col, Image, Divider, Button, Dropdown} from "antd";
import {
  HomeOutlined,
  NotificationOutlined,
  AudioOutlined,
  InfoCircleOutlined,
  TagOutlined,
  UserOutlined
} from "@ant-design/icons";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

import logo from "../images/logo.jfif";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Latest News",
    key: "latestnews",
    icon: <NotificationOutlined />,
  },
  {
    label: "Features",
    key: "features",
    icon: <TagOutlined />,
  },
  {
    label: "Interviews",
    key: "interviews",
    icon: <AudioOutlined />,
  },
  {
    label: "About",
    key: "about",
    icon: <InfoCircleOutlined />,
  },
];

const menu = (
  <Menu>
    <Menu.Item key="option1">
      Login
    </Menu.Item>
    <Menu.Item key="option2">
      Register
    </Menu.Item>
  </Menu>
);

function Header({ setCurrentPage }) {
  const [current, setCurrent] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setCurrentPage(e.key);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Row>
      <Col
        className="gutter-row logo-column"
        xs={0}
        sm={0}
        md={0}
        lg={0}
        xl={2}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          height: "60px",
        }}
      >
        <Image src={logo} height="99%" />
      </Col>

      <Col className="gutter-row" xs={6} sm={15} md={16} lg={16} xl={16}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Col>

      <Col
        className="gutter-row"
        xs={12}
        sm={9}
        md={8}
        lg={8}
        xl={6}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >

        
        <Search placeholder="Search..." onSearch={onSearch} enterButton />
        <Button 
          type="text" 
          onClick={toggleDarkMode} 
          icon={darkMode ? <BulbFilled /> : <BulbOutlined />}
          style={{ marginLeft: '10px' }}
        />
         
         <Dropdown overlay={menu}>
          <UserOutlined style={{ fontSize: '15px', marginLeft: '10px', cursor: 'pointer' }} />
        </Dropdown>

      </Col>

      <Divider style={{borderColor: '#1668dc', borderWidth: '5px'}}/>
    </Row>
  );
}

export default Header;