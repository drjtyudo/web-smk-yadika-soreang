import React from "react";
import Footer from "../components/layouts/footer";
import Navigation from "../components/layouts/navigationbar";
import { dataGuru } from "../data/dataGuru";

const Guru = () => {
  return (
    <div className="guru">
      <Navigation />
      <h3 className="fw-bold text-center my-5">Guru SMK YADIKA SOREANG </h3>
      <div className="data-guru d-flex flex-wrap justify-content-center">
        {dataGuru.map((e) => (
          <div className="card-guru text-center">
            <img src="./images/imageInfo/profileGuru.png" alt="" />
            <h5 className="my-3 fw-bold">{e.nama}</h5>
            <p>{e.mataPelajaran}</p>
          </div>
        ))}
      </div>
      <Footer footerImg="./images/background/background4.png" />
    </div>
  );
};

export default Guru;
