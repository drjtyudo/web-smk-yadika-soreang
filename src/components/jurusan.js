import React from "react";
import { Container } from "react-bootstrap";

const Jurusan = () => {
  return (
    <Container>
      <div className="jurusan d-flex justify-content-between">
        <div className="card akutansi text-center p-5">
          <img src="./images/jurusan/akutansi.png" alt="" />
          <h5 className="mt-3">Akutansi</h5>
          <p className="my-4">
            Jurusan Akuntansi merupakan bidang studi yang mempelajari tentang
            metode pencatatan serta penyusunan laporan keuangan .
          </p>
          <button className="btn m-auto">More</button>
        </div>
        <div className="card akutansi text-center p-5">
          <img src="./images/jurusan/rpl.png" alt="" />
          <h5 className="mt-3">Rekayasa Perangkat lunak</h5>
          <p className="my-4">
            Rekayasa Perangkat Lunak adalah salah satu jurusan yang berfokus
            pada produksi dan pengembangan perangkat lunak .
          </p>
          <button className="btn m-auto">More</button>
        </div>
        <div className="card akutansi text-center p-5">
          <img src="./images/jurusan/hotel.png" alt="" />
          <h5 className="mt-3">Perhotelan</h5>
          <p className="my-4">
            Jurusan Perhotelan adalah jurusan yang mempelajari pengelolaan hotel
            serta cara menyeimbangkan aspek wisata dan manajemen bisnis untuk
            mencapai kesuksesan .
          </p>
          <button className="btn m-auto">More</button>
        </div>
      </div>
    </Container>
  );
};

export default Jurusan;
