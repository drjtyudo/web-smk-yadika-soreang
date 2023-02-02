import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className="ppdb d-flex justify-content-between text-white">
        <h3>Ayo daftar sekarang juga!</h3>
        <button className="btn">PPDB</button>
        <img src={props.footerImg} alt="" />
      </div>
      <div className="contact-footer d-flex justify-content-between">
        <div className="container-contact">
          <div className="alamat d-flex">
            <img src="./images/logo/logoyadika.png" alt="" />
            <p className="d-flex flex-column">
              <span className="fs-3 fw-semibold">SMK Yadika Soreang</span>Jl.
              Raya Soreang, Cingcin, Kec. Soreang, Kabupaten Bandung, Jawa Barat
              40921
            </p>
          </div>
          <div className="contact mt-4">
            <p>
              <i className="bi bi-envelope-at-fill"></i>{" "}
              smkyadikasoreang@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> 08912300000400
            </p>
          </div>
        </div>
        <div className="link d-flex ">
          <div className="link1 d-flex flex-column">
            <h5>Link Helper</h5>
            <Link to={"/"}>Home </Link>
            <Link to={"profile"}>Profile</Link>
            <Link to={"/"}>Kelulusan</Link>
            <Link to={"/"}>PPDB</Link>
          </div>
          <div className="link1  d-flex flex-column ms-5">
            <h5>Need Help ?</h5>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Help</Link>
            <Link to={"/"}>FAQ'S</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
