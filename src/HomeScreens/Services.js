import React from "react";
import { Col, Image } from "react-bootstrap";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-div">
      <div className="serve">
        <div className="do-div">WHAT WE DO</div>
        <div className="our-div">Our Services</div>
      </div>
      <div className="service-flex-div">
        <div>
          <div className="service-div-img">
            <Image className="service-img" src="./pix.jpg" alt="je" fluid />
          </div>
          <div className="service-trans">Eevnt DJ</div>
          <div className="service-write-up">
            Our service is founded on the commitment, dedication and
            professionalism, and we keep to all standards of quality
          </div>
          <div className="service-border">
            <Col className="service-p">Learn more</Col>
          </div>
        </div>
        <div className="div-serve">
          <div className="service-div-img">
            <Image className="service-img" src="./pix.jpg" alt="je" fluid />
          </div>
          <div className="service-trans">Event Decorator</div>
          <div className="service-write-up">
            Our service is founded on the commitment, dedication and
            professionalism, and we keep to all standards of quality
          </div>
          <div className="service-border">
            <div className="service-p">Learn more</div>
          </div>
        </div>
        <div className="div-serve">
          <div className="service-div-img">
            <Image className="service-img" src="./pix.jpg" alt="je" fluid />
          </div>
          <div className="service-trans"> Bridal Outfits</div>
          <div className="service-write-up">
            Our service is founded on the commitment, dedication and
            professionalism, and we keep to all standards of quality
          </div>
          <div className="service-border">
            <div className="service-p">Learn more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
