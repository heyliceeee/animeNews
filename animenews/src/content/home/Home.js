import React from "react";
import { Card, Row, Col, Typography, Divider, Tag } from "antd";
import "./Home.css";

const { Meta } = Card;
const { Text } = Typography;

function Home() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Text className="anime-news">AnimeRadar</Text>
      </Row>

      <Row style={{ justifyContent: "center", marginBottom: "60px" }}>
        <Text className="subtitle">
          Stay ahead in the anime game, or risk being hit with filler episodes!
        </Text>
      </Row>

      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ border: "1px solid #774" }}
        >
          <Card
            hoverable
            style={{
              backgroundColor: "#000000",
              color: "#fff",
              marginBottom: "-50px",
            }}
            cover={
              <img
                alt="series"
                src="https://a.storyblok.com/f/178900/960x537/b14fcaf531/visions-of-mana-elemental-vessels.jpg/m/filters:quality(95)format(webp)" // Substitua pela imagem correta
                style={{ opacity: 0.8 }}
              />
            }
          >
            <Tag
              color="blue"
              style={{ position: "absolute", marginTop: "-130px" }}
            >
              News
            </Tag>
            <Tag
              color="blue"
              style={{
                position: "absolute",
                marginTop: "-130px",
                marginLeft: "50px",
              }}
            >
              Games
            </Tag>
            <Meta
              title="Visions of Mana Trailer Introduces Elemental Vessels"
              description="Next entry in the series hits consoles and PC on August 29"
              style={{
                position: "absolute",
                color: "#fff",
                marginTop: "-100px",
                marginBottom: "0px",
              }}
            />
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ border: "1px solid #774" }}
        ></Col>
      </Row>
    </div>
  );
}

export default Home;
