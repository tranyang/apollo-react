import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">

      <Row className="bottom-bar">
        <Col md={4} sm={24} />
        <Col md={20} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright © Apollo technologies</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
