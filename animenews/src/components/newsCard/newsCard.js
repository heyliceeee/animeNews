import React from "react";
import { Row, Col, Typography, Divider, Image } from "antd";

const { Title, Link, Text } = Typography;

function NewsCard({ image, tags, date, title, subtitle, content, author }) {
  return (
    <div>
      <Row justify="left" xs={20} sm={18} md={16} lg={14} xl={12}>
        <Col
          style={{
            backgroundColor: "#fff",
            marginBottom: "10px",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={image}
            style={{
              borderRadius: "3px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            preview={false}
          />
        </Col>
      </Row>

      <Row
        style={{
          marginBottom: "-20px",
        }}
      >
        <Col>
          <Row>
            {tags.split(";").map((tag, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#2222",
                  border: "1px solid #2222",
                  borderRadius: "3px",
                  padding: "4px 8px",
                  marginRight: "5px",
                }}
              >
                <Text strong style={{ color: "#1668dc" }}>
                  {tag.trim()}
                </Text>
              </div>
            ))}
          </Row>
        </Col>
      </Row>

      <Row style={{ marginBottom: "-20px" }}>
        <Title level={5}>{date}</Title>
      </Row>

      <Row style={{ marginBottom: "0px" }}>
        <Title level={4}>{title}</Title>
      </Row>

      <Row>
        <Text strong style={{ color: "#1668dc" }}>
          {author}
        </Text>
      </Row>

      <Divider
        style={{
          borderColor: "#1668dc",
          borderWidth: "2px",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      />
    </div>
  );
}

export default NewsCard;
