import React from "react";
import { Container } from "react-bootstrap";

const SimpleJumbotron = (props) => {
  return (
    <div
      className="simple-jumbotron"
      style={{ backgroundColor: props.bgColor }}
    >
      <Container className="d-flex justify-content-between text-white">
        <div className="jumbotron-text">
          <h1>{props.jumbotronTitle}</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </div>
        <div className="jumbotron-img">
          <img src={props.jumbotronImg} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default SimpleJumbotron;
