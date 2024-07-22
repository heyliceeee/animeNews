import React, { useState } from "react";
import "./Header.css";
import { Menu, Input, Row, Col, Image, Divider } from "antd";
import {
  HomeOutlined,
  NotificationOutlined,
  AudioOutlined,
  InfoCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";

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

function Header({ setCurrentPage }) {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setCurrentPage(e.key);
  };

  return (
    <Row>
      <Col
        className="gutter-row logo-column"
        xs={2}
        sm={2}
        md={2}
        lg={2}
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

      <Col className="gutter-row" xs={6} sm={10} md={16} lg={16} xl={16}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ borderBottom: "none" }}
        />
      </Col>

      <Col
        className="gutter-row"
        xs={16}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Search placeholder="Search..." onSearch={onSearch} enterButton />
      </Col>

      <Divider
        style={{
          borderColor: "#1668dc",
          borderWidth: "4px",
          marginTop: "4px",
        }}
      />
    </Row>
  );
}

export default Header;
