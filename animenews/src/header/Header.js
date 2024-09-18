import React, { useState } from "react";
import "./Header.css";

import { Menu, Row, Col, Image, Divider, Button, Grid, Dropdown } from "antd";
import {
  HomeOutlined,
  NotificationOutlined,
  AudioOutlined,
  TagOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import logo from "../images/logo.png";

const { useBreakpoint } = Grid;

const Header = ({ setCurrentPage }) => {
  const [current, setCurrent] = useState("home");
  const screens = useBreakpoint();

  const onClick = (e) => {
    setCurrent(e.key);
    setCurrentPage(e.key);
  };

  // Itens do menu principal
  const mainItems = [
    { label: "Home", key: "home", icon: <HomeOutlined /> },
    { label: "Latest News", key: "latestnews", icon: <NotificationOutlined /> },
    { label: "Features", key: "features", icon: <TagOutlined /> },
    { label: "Interviews", key: "interviews", icon: <AudioOutlined /> },
  ];

  // Define quais itens exibir diretamente na barra principal e quais vão para o dropdown
  const getVisibleMenuItems = () => {
    if (screens.xl) {
      // >= 1200 px
      return mainItems;
    } else if (screens.lg) {
      // >= 992 px
      return mainItems;
    } else if (screens.md) {
      // >= 768 px
      return mainItems.slice(0, 3); // Exibe 3 itens no md
    } else if (screens.sm) {
      // >= 576 px
      return mainItems.slice(0, 2); // Exibe 2 itens no sm
    } else {
      return []; // Exibe 0 itens no xs
    }
  };

  const getDropdownItems = () => {
    const visibleItemsCount = getVisibleMenuItems().length;
    return mainItems.slice(visibleItemsCount).map((item) => ({
      label: item.label,
      key: item.key,
      icon: item.icon,
    }));
  };

  const dropdownMenu = <Menu onClick={onClick} items={getDropdownItems()} />;

  return (
    <Row>
      <Col
        className="gutter-row logo-column"
        xs={6}
        sm={3}
        md={3}
        lg={2}
        xl={2}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          height: "60px",
        }}
      >
        <Image src={logo} height="99%" preview={false} />
      </Col>

      <Col
        className="gutter-row"
        xs={8}
        sm={15}
        md={16}
        lg={18}
        xl={19}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end", // Alinha o Menu à direita
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={getVisibleMenuItems()}
          style={{
            borderBottom: "none",
            flexGrow: "1",
            justifyContent: "flex-end",
          }} // Alinha os itens do menu à direita
          overflowedIndicator={null} // Evita o overflow automático
        />
        {getDropdownItems().length > 0 && (
          <Dropdown overlay={dropdownMenu}>
            <Button className="btnMoreItems" icon={<MoreOutlined />} />
          </Dropdown>
        )}
      </Col>

      <Col
        className="gutter-row"
        xs={10}
        sm={6}
        md={5}
        lg={4}
        xl={3}
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Button className="btnMyaccount" style={{ cursor: "pointer" }}>
          My account
        </Button>
      </Col>

      <Divider
        style={{
          marginTop: "4px",
        }}
      />
    </Row>
  );
};

export default Header;
