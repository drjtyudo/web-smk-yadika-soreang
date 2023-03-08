import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <Container>
        {window.innerWidth < 430 && (
          <div className="d-flex justify-content-center">
            <img
              src="./images/logo/logoyadika.png"
              alt=""
              style={{
                width: "70px",
                marginTop: "-100px",
                marginBottom: "80px",
              }}
            />
          </div>
        )}
        <Row className="justify-content-between">
          <Col>
            <h1 className="fw-bold">SMK Yadika Soreang</h1>
            <p className="mb-4">
              Sekolah Menengah Kejuruan yang memiliki 3 jurusan yaitu
              Perhotelan, Rekayasa Perangkat Lunak, dan Akutansi yang memiliki
              fasilitas mewah dengan harga terjangkau.
            </p>
            <Button className="btn-contact pb-2">Contact Us</Button>
            <Button className="btn-OurSch ms-3 pb-2">Our School</Button>
          </Col>
          {window.innerWidth > 430 && (
            <Col>
              <img src="./images/background/SMK.png" alt="" />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
