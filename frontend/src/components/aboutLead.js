import React from "react";
import { Container } from "react-bootstrap";

function AboutLead() {
  return (
    <Container>
      <div className="about-leader d-flex justify-content-center">
        {window.innerWidth < 430 && (
          <h3 className="fw-bold text-center">Kepala Sekolah Kita</h3>
        )}
        <div className="image-leader me-lg-5 m-auto m-lg-0">
          <img src="./images/imageInfo/lead.png" alt="" />
        </div>
        <div className="text-about-lead ms-lg-5 p-4 p-lg-0">
          {window.innerWidth > 430 && (
            <h3 className="fw-bold">Kepala Sekolah Kita</h3>
          )}
          <p>
            Selamat datang di website resmi SMK Yadika Soreang. Saya sangat
            gembira dapat berbicara pada Anda melalui platform ini. Sebagai
            kepala sekolah, saya bertanggung jawab untuk memimpin dan memberikan
            arah bagi sekolah kami. Saya sangat bangga dengan prestasi dan
            keberhasilan yang telah dicapai oleh para siswa, guru, dan staf
            kami. Website ini dirancang untuk memberikan informasi tentang
            sekolah kami, seperti visi, misi, program, dan kegiatan. Kami
            berharap bahwa website ini akan menjadi sumber informasi yang
            berguna bagi para siswa, orang tua, dan masyarakat. Sebagai sekolah,
            kami bertekad untuk terus memperbaiki diri dan memberikan pendidikan
            berkualitas bagi para siswa. Saya berharap bahwa Anda akan menemukan
            informasi yang berguna dan menarik di website ini. Terima kasih atas
            kunjungan Anda. <br /> <br /> Salam, <br />
            <br /> Didin.Spd
          </p>
        </div>
      </div>
    </Container>
  );
}

export default AboutLead;
