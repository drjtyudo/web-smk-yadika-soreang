import React from "react";
import { Container } from "react-bootstrap";

function AboutLead() {
  return (
    <Container>
      <div className="about-leader d-flex justify-content-between">
        <div className="image-leader">
          <img src="./images/imageInfo/lead.png" alt="" />
        </div>
        <div className="text-about-lead">
          <h3>Kepala Sekolah Kita</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </Container>
  );
}

export default AboutLead;
