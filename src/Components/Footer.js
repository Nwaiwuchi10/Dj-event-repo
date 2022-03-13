import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ background: "#1e2a34" }}>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Event Vendor</Col>
        </Row>
        <Row>
          <Col
            className="text-center py-3"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <FaInstagram /> <FaFacebook /> <FaWhatsapp />{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
