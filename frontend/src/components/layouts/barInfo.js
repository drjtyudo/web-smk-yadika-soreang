import React from "react";
import { Container } from "react-bootstrap";
const BarInfo = () => {
  return (
    <Container>
      <div className="barInfo d-flex justify-content-between mx-auto p-5">
        <div className="student d-flex">
          <img src="/images/imageInfo/student.png" alt="" />
          <h5 className="d-flex flex-column mt-3 ms-3">
            900+ <span>Student</span>
          </h5>
        </div>
        <div className="calendar d-flex">
          <img src="./images/imageInfo/calendar.png" alt="" />
          <h5 className="d-flex flex-column mt-3 ms-3">
            900+ <span>Student</span>
          </h5>
        </div>
        <div className="teacher d-flex">
          <img src="./images/imageInfo/teacher.png" alt="" />
          <h5 className="d-flex flex-column mt-3 ms-3">
            900+ <span>Student</span>
          </h5>
        </div>
      </div>
    </Container>
  );
};

export default BarInfo;
