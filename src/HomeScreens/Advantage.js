import React from "react";
import { FormatShapesOutlined } from "@material-ui/icons";

import { Col, Container, Row } from "react-bootstrap";
import {
  FaArrowAltCircleDown,
  FaCheck,
  FaCreativeCommonsPdAlt,
} from "react-icons/fa";
import "./Advantage.css";
const Advantage = () => {
  return (
    <div className="Container-div">
      <Container>
        <Row>
          {" "}
          <Col className="col-cont">WHO WE ARE</Col>
        </Row>

        <Row>
          <Col className="col-cont1">Our Advantages</Col>
        </Row>
        <div className="contel">
          <div>
            <div className="Cont-icon-div">
              {" "}
              <FaCreativeCommonsPdAlt
                style={{ fontSize: "25px" }}
                className="Cont-icon"
              />{" "}
            </div>
            <div className="Conter-div">Cargo Tracking</div>
            <div className="Conting-div">
              <div> As a market leader in freight forwarding,</div>
              <div> we are providing tailored services…</div>
            </div>
          </div>
          <div>
            <div className="Cont-icon-div">
              {" "}
              <FaCheck style={{ fontSize: "25px" }} className="Cont-icon" />
            </div>
            <div className="Conter-div">Perfect Communication</div>
            <div className="Conting-div">
              <div> We can provide you with a customized </div>
              <div>freight solution tailored to your needs…</div>
            </div>
          </div>
          <div>
            <div className="Cont-icon-div">
              {" "}
              <FormatShapesOutlined
                style={{ fontSize: "25px" }}
                className="Cont-icon"
              />
            </div>
            <div className="Conter-div">Reliability & Puntuality</div>
            <div className="Conting-div">
              <div> Our freight company has a consultative,</div>
              <div> personalized approach to hiring…</div>
            </div>
          </div>
        </div>
        <div className="conting-bord">
          <p>Learn More</p>
          <FaArrowAltCircleDown
            style={{
              fontSize: "12px",
              display: "flex",
              marginTop: "0px",
              marginLeft: "50px",
            }}
          />{" "}
        </div>
      </Container>
    </div>
  );
};

export default Advantage;
