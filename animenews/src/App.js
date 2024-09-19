import React from "react";
import "./App.css";

import { ConfigProvider, Row, Col } from "antd";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./content/home/Home";
import About from "./content/about/About";
import LatestNews from "./content/latestNews/LatestNews";
import Interviews from "./content/interviews/Interviews";
import Features from "./content/features/Features";

import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Home />;

      case "about":
        return <About />;

      case "latestnews":
        return <LatestNews />;

      case "interviews":
        return <Interviews />;

      case "features":
        return <Features />;

      default:
        return <Home />;
    }
  };

  return (
    <ConfigProvider>
      <Row gutter={{ xs: 10, sm: 18, md: 26, lg: 34 }} className="website">
        <Col className="gutter-row" span={2} />

        <Col className="gutter-row" span={20}>
          <Header setCurrentPage={setCurrentPage} />
          {renderContent()}
        </Col>

        <Col className="gutter-row" span={2} />
      </Row>
      <Footer />
    </ConfigProvider>
  );
}

export default App;
