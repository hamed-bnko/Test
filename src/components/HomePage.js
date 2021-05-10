import React from "react";
import { Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Row>
        <Col>
          <img src="img/1.jpg" width="200" alt="" />
        </Col>
        <Col>
          <img src="img/2.jpeg" width="200" alt="" />
        </Col>
        <Col>
          <img src="img/3.jpeg" width="200" alt="" />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
