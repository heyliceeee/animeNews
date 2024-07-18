import React from 'react';
import './App.css';

import { ConfigProvider, theme, Row, Col } from 'antd';

import Header from './header/Header';
import Footer from './footer/Footer';

const style = {
  background: '#0092ff',
  padding: '8px 0',
};

function App() {
  return (
    <ConfigProvider theme={{token: { colorPrimary: '#1668dc' } }}>
      <Row gutter={{xs: 10, sm: 18, md: 26, lg: 34,}}>
        <Col className="gutter-row" span={2}/>

        <Col className="gutter-row" span={20}>
          <Header/>
          {/* content */}

          <Footer/>
        </Col>

        <Col className="gutter-row" span={2}/>
      </Row>
    </ConfigProvider>
  );
}

export default App;
