import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Demo slider
import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ background: "#f7f6f2", minHeight: "55vh" }}>
        <Container>
          <Row>
            <Col
              className="text-center py-3"
              style={{ color: "#af9e8b", marginTop: "35px" }}
            >
              OUR CLIENTS SAYS
            </Col>
          </Row>
          <Row>
            <Col
              className="text-center py-3"
              style={{ color: "#1e2a34", fontSize: "40px", fontWeight: "800" }}
            >
              Testimonials{" "}
            </Col>
          </Row>
          <div>
            <Slider {...settings}>
              <Col className="nem">
                I am so pleased with the company's service, their employees
                stands to deliver their quality work promise
                <Image
                  src="./pix.jpg"
                  alt="h"
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid whitesmoke",
                    borderRadius: "50px",
                  }}
                />
              </Col>

              <Col className="nem">
                The experience has been good so far. Their vendors deliver, on
                that I would recommend to everyone
                <Image
                  src="./pix.jpg"
                  alt="h"
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid whitesmoke",
                    borderRadius: "50px",
                  }}
                />
              </Col>

              <Col className="nem">
                I have been using Book an event vendor for my event and i found
                it fantastic. I am so pleased with the company's service.
                <Image
                  src="./pix.jpg"
                  alt="h"
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid whitesmoke",
                    borderRadius: "50px",
                  }}
                />
              </Col>
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
