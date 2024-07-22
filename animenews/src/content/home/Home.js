import React from "react";
import { Row, Col, Typography, Divider } from "antd";

const { Title, Link } = Typography;

function Home() {
  return (
    <div>
      <Row>
        <Col
          className="gutter-row"
          span={6}
          style={{ borderRight: "1px solid #f0f0f0", paddingRight: "10px" }}
        >
          <Title level={3}>Latest News</Title>
          <Divider style={{ borderColor: "#1668dc", borderWidth: "4px" }} />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            borderRight: "1px solid #f0f0f0",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Title level={3}>Spotlight</Title>
          <Divider style={{ borderColor: "#1668dc", borderWidth: "4px" }} />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            paddingLeft: "10px",
          }}
        >
          <Title level={3}>Features</Title>
          <Divider style={{ borderColor: "#1668dc", borderWidth: "4px" }} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
