import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
  235deg,
  whitesmoke,
  #fafdffaf,
  
  #d6d1d3,
  rgb(245, 241, 237),
  #fafdffaf,
  whitesmoke
)`,
        width: "100%",
        height: "55vh",
      }}
    >
      <Container>
        <Row>
          <Col
            className="text-center py-3"
            style={{
              color: "#1e2a34",
              fontSize: "30px",
              fontWeight: "800",
              position: "relative",
              top: "25px",
            }}
          >
            Welcome To Event Vendor
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center py-3"
            style={{ position: "relative", top: "20px", fontWeight: "400" }}
          >
            Book an event vendor to have a smooth and seamless experience on
            your events. We promise you an event satisfaction, Your event
            satisfaction is our main priority, with quick response in timing,
            you will like what you have never seen before. Try us today, Then
            testify our good works.
          </Col>
        </Row>
        <Link to="/login">
          <Button
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              background: "#13181d",
              border: "1px solid transparent",
              width: "200px",
              alignItems: "center",
              position: "relative",
              height: "40px",
              borderRadius: "10px",
              margin: "auto",
              top: "35px",
            }}
          >
            Book Us
          </Button>{" "}
        </Link>
      </Container>
    </div>
  );
};

export default Welcome;
