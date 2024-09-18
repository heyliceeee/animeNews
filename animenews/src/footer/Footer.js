import React from "react";
import "./Footer.css";

import { Row, Col, Divider, Typography } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Title, Link } = Typography;

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col className="gutter-row" span={12}>
          <p className="txtCopyright">Copyright © 2024 Alice Dias. Todos os direitos reservados.</p>
        </Col>
        <Col className="gutter-row" span={12}>
          <p className="txtCopyright">Copyright © 2024 Alice Dias. Todos os direitos reservados.</p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
