import React from "react";
import GuruJurusan from "../../components/swiper/GuruJurusan.js";
import LabPraktikum from "../../components/LabPraktikum.js";
import Footer from "../../components/layouts/footer.js";
import Navigation from "../../components/layouts/navigationbar.js";
import Purpose from "../../components/Purpose.js";
import Reason from "../../components/Reason.js";
import SimpleJumbotron from "../../components/simpleJumbotron.js";
import GaleryJurusan from "../../components/swiper/GaleryJurusan.js";

const Ak = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="ak">
        <SimpleJumbotron
          jumbotronTitle="Akutansi"
          jumbotronImg="./images/jurusan/jumbotron/jumbotronAk.png"
          bgColor="#05770AB2"
          jumbotronDesc="Akuntansi adalah sebuah jurusan yang mempelajari tentang proses perekaman, pelaporan dan pengendalian keuangan suatu organisasi. Lulusan jurusan Akuntansi dapat bekerja sebagai akuntan, auditor, konsultan keuangan, atau profesional keuangan lainnya. Mereka memahami prinsip-prinsip akuntansi, standar akuntansi, perpajakan, dan perencanaan keuangan. Tujuan dari jurusan ini adalah untuk menghasilkan profesional yang memahami cara menilai dan mengelola keuangan suatu organisasi, serta membuat laporan yang dapat dipercaya dan berguna bagi pihak internal maupun eksternal."
        />
        {window.innerWidth > 430 && (
          <Purpose bg="bg-ak" secondBg="second-bg-ak" />
        )}
        <center>
          <GaleryJurusan
            slide1="./images/jurusan/galery/akutansi/akutansi.JPG"
            slide2="./images/jurusan/galery/akutansi/akutansi2.JPG"
            slide3="./images/jurusan/galery/akutansi/akutansi3.JPG"
          />
        </center>
        <Reason
          jurusan="Akutansi"
          reason="jurusan Akuntansi dapat menjadi pilihan yang baik   bagi seseorang yang tertarik dengan bisnis dan keuangan, dan memiliki kemampuan analitis yang baik. Namun, seperti jurusan lainnya, penting untuk memastikan bahwa jurusan ini cocok dengan minat dan kemampuan seseorang sebelum memutuskan untuk memasukinya."
        />
        <LabPraktikum labImg="./images/jurusan/galery/akutansi/akutansi2.JPG" />
        <GuruJurusan />
      </div>
      <Footer footerImg="./images/jurusan/footer/footer-AK.png" />
    </React.Fragment>
  );
};

export default Ak;
