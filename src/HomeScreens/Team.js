import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <Container>
        <Row style={{ background: "#ffffff;" }}>
          <Col className="text-center py-3" style={{ color: "#af9e8b" }}>
            WHO WE ARE
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center py-3"
            style={{ color: "#1e2a34", fontSize: "40px", fontWeight: "800" }}
          >
            Our Team
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            Our long history of unparalleled commitment to partnering with the
            most extensive carriers and our ability to offer the most versatile
            services
          </Col>
        </Row>
        <Row className="dis">
          <Col>
            <Image
              className="to"
              src="./pix.jpg"
              alt="k"
              fluid
              thumbnail
              style={{ width: "300px", height: "300px" }}
            />
            <Row>
              <Col className="text-center py-3">
                Expert in automotive delivery of tires, spare parts and
                accessories to warehouses and recipients.
              </Col>
            </Row>
            <Row>
              <Col className="text-center py-3">Puyol</Col>
            </Row>
            <Row>
              <Col className="text-center py-3">Company's Director</Col>
            </Row>
          </Col>

          <Col>
            <Image
              className="to"
              src="./pix.jpg"
              alt="l"
              fluid
              thumbnail
              style={{ width: "300px", height: "300px" }}
            />
            <Row>
              <Col className="text-center py-3">
                We deliver domestic electronics and appliances and enable our
                clients to monitor their loads online.
              </Col>
            </Row>
            <Row>
              <Col className="text-center py-3">Mutiu</Col>
            </Row>
            <Row>
              <Col className="text-center py-3">Company's Director</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
