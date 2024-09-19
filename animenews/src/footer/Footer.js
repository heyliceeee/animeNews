import React from "react";
import "./Footer.css";

import { Row, Col, Typography } from "antd";

const { Text, Link } = Typography;

function Footer() {
  return (
    <div className="footer">
      <Row style={{ width: "83%" }}>
        <Col
          className="gutter-row col-footer"
          xs={14}
          sm={14}
          md={16}
          lg={18}
          xl={19}
        >
          <Row>
            <Text className="txtCopyrightLight" style={{ marginRight: "5px" }}>
              Made with 💕 and ☕ by
            </Text>
            <Text className="txtCopyrightBold" style={{ marginRight: "5px" }}>
              Alice Dias.
            </Text>
          </Row>
        </Col>
        <Col
          className="gutter-row"
          xs={10}
          sm={10}
          md={8}
          lg={6}
          xl={5}
        >
          <Row style={{ justifyContent: "flex-end" }}>
            <Text className="txtCopyrightLight" style={{ marginRight: "5px" }}>
              Powered by
            </Text>

            <Link
              className="txtCopyrightBold"
              href="https://github.com/heyliceeee"
              target="_blank"
              aria-label="Link para o GitHub de Alice Dias"
            >
              heyliceeee
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
