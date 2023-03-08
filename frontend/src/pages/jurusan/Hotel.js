import React from "react";
import SimpleJumbotron from "../../components/simpleJumbotron.js";
import Navigation from "../../components/layouts/navigationbar.js";
import Purpose from "../../components/Purpose.js";
import Reason from "../../components/Reason.js";
import Footer from "../../components/layouts/footer.js";
import LabPraktikum from "../../components/LabPraktikum.js";
import GuruJurusan from "../../components/swiper/GuruJurusan.js";
import GaleryJurusan from "../../components/swiper/GaleryJurusan.js";

const Hotel = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="hotel">
        <SimpleJumbotron
          jumbotronTitle="Perhotelan"
          jumbotronImg="./images/jurusan/jumbotron/jumbotronHtl.png"
          bgColor="#7B500FB2"
          jumbotronDesc="Jurusan Perhotelan adalah sebuah program studi yang mempelajari tentang bisnis dan manajemen dalam industri pariwisata dan perhotelan. Lulusan jurusan ini akan memahami bagaimana mengelola sebuah hotel, restoran, atau bisnis pariwisata lainnya. Mereka akan belajar tentang front office, housekeeping, food and beverage service, catering, sales and marketing, dan banyak hal lain yang berkaitan dengan industri perhotelan. Jurusan Perhotelan juga memfokuskan pada pengembangan soft skills seperti keterampilan komunikasi, leadership, dan customer service, yang sangat penting bagi kesuksesan karier dalam industri ini."
        />
        {window.innerWidth > 430 && (
          <Purpose bg="bg-htl" secondBg="second-bg-htl" />
        )}
        <center>
          <GaleryJurusan
            slide1="./images/jurusan/galery/hotel/hotel1.JPG"
            slide2="./images/jurusan/galery/hotel/hotel2.JPG"
            slide3="./images/jurusan/galery/hotel/hotel3.JPG"
          />
        </center>
        <Reason
          jurusan="Perhotelan"
          reason=" jurusan Perhotelan dapat menjadi pilihan yang baik bagi seseorang yang tertarik dengan pelayanan pelanggan dan memiliki kemampuan interpersonal yang baik. Namun, seperti jurusan lainnya, penting untuk memastikan bahwa jurusan ini cocok dengan minat dan kemampuan seseorang sebelum memutuskan untuk memasukinya."
        />
        <LabPraktikum labImg="./images/jurusan/galery/hotel/hotel1.JPG" />
        <GuruJurusan />
      </div>
      <Footer footerImg="./images/jurusan/footer/footer-hotel.png" />
    </React.Fragment>
  );
};

export default Hotel;
