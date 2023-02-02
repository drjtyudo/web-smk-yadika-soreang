import React from "react";
import Navigation from "../../components/layouts/navigationbar.js";
import Purpose from "../../components/Purpose.js";
import SimpleJumbotron from "../../components/simpleJumbotron.js";

const Ak = () => {
  return (
    <div className="ak">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="Akutansi"
        jumbotronImg="./images/jurusan/jumbotron/jumbotronAk.png"
        bgColor="#05770AB2"
      />
      <Purpose bg="bg-ak" secondBg="second-bg-ak" />
    </div>
  );
};

export default Ak;
