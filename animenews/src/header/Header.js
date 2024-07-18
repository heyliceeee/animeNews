import React, { useState } from "react";
import "./Header.css";
import { Menu, Input, Space, Row, Col, Image } from "antd";
import { HomeOutlined, NotificationOutlined, AudioOutlined, InfoCircleOutlined,} from "@ant-design/icons";

import logo from '../images/logo.jfif';

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

function Header() {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (

    <Row>
      <Col className="gutter-row logo-column" xs={0} sm={0} md={0} lg={0} xl={2} style={{ border: "2px solid #1890ff", borderRadius: "4px", display: 'flex', justifyContent: 'left', alignItems: 'left', height: "60px"}}>
        <Image src={logo} height="99%"/>
      </Col>

      <Col className="gutter-row" xs={6} sm={15} md={16} lg={16} xl={16} style={{ border: "2px solid #1890ff", borderRadius: "4px" }}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Col>

      <Col className="gutter-row" xs={18} sm={9} md={8} lg={8} xl={6} style={{ border: "2px solid #1890ff", borderRadius: "4px" }}>
        <Search placeholder="Search..." onSearch={onSearch} enterButton />
      </Col>
    </Row>
  );
}

export default Header;
