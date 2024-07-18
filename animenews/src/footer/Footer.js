import React from "react";
import "./Footer.css";

import { Row, Col, Divider, Typography } from "antd";

import {
  HomeOutlined,
  NotificationOutlined,
  AudioOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Link } = Typography;

function Footer() {
  return (
    <Row>
      <Col className="gutter-row" span={6}>
        <Divider />
        <Title level={4}>Navigation</Title>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Col>
      <Col className="gutter-row" span={6}>
        <Divider />
        <Title level={4}>Connect With Us</Title>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Col>
      <Col className="gutter-row" span={6}>
        <Divider />
        <Title level={4}>Anime News</Title>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Col>
      <Col className="gutter-row" span={6}>
        <Divider />
        <Title level={4}>Account</Title>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Col>
    </Row>
  );
}

export default Footer;
