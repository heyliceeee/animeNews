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
    <div>
      <Row>
        <Col className="gutter-row" span={6}>
          <Divider />
          <Title level={4}>Navigation</Title>

          <div>
            <Link href="#" target="_blank">
              Home
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Latest News
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Features
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Interviews
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              About
            </Link>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <Divider />
          <Title level={4}>Connect With Us</Title>

          <div>
            <Link href="#" target="_blank">
              <FacebookOutlined
                style={{ fontSize: "16px", color: "#1668dc" }}
              />{" "}
              Facebook
            </Link>
          </div>
          <div>
            <Link href="#" target="_blank">
              <InstagramOutlined
                style={{ fontSize: "16px", color: "#1668dc" }}
              />{" "}
              Instagram
            </Link>
          </div>
          <div>
            <Link href="#" target="_blank">
              <TikTokOutlined style={{ fontSize: "16px", color: "#1668dc" }} />{" "}
              TikTok
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              <TwitterOutlined style={{ fontSize: "16px", color: "#1668dc" }} />{" "}
              Twitter
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              <YoutubeOutlined style={{ fontSize: "16px", color: "#1668dc" }} />{" "}
              Youtube
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              <WhatsAppOutlined
                style={{ fontSize: "16px", color: "#1668dc" }}
              />{" "}
              WhatsApp
            </Link>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <Divider />
          <Title level={4}>Anime News</Title>

          <div>
            <Link href="#" target="_blank">
              Help Center
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Terms of Use
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Privacy Policy
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              AdChoices
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Do Not Sell or Share My Personal Information
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Cookie Consent Tool
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Press Inquiries
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Get the Apps
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Redeem Gift Card
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Jobs
            </Link>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <Divider />
          <Title level={4}>Account</Title>

          <div>
            <Link href="#" target="_blank">
              My Account
            </Link>
          </div>

          <div>
            <Link href="#" target="_blank">
              Log Out
            </Link>
          </div>
        </Col>
      </Row>

      <Row>
        <Divider />

        <Col
          className="gutter-row"
          span={12}
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          <Title level={5}>© Anime News</Title>
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
          }}
        >
          <Title level={5}>ENGLISH (US)</Title>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
