import React from "react";
import { Button } from "react-bootstrap";
import "./Interest.css";

const Interest = () => {
  return (
    <div className="interest-main-div">
      <div className="interest-div">
        <div className="interest-h1">
          Interested in working As An Event Vendor?
        </div>
        <div className="interest-h2">
          We don’t just manage suppliers, we micro-manage them. We have a
          consultative, personalized approach
        </div>
        <div className="interest-bod">
          <div className="interest-border">
            <Button variant="primary">Get In Touch </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
