import React from "react";
import Navigation from "../../components/layouts/navigationbar.js";
import Purpose from "../../components/Purpose.js";
import SimpleJumbotron from "../../components/simpleJumbotron.js";

const Rpl = () => {
  return (
    <div className="rpl">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="Rekayasa Perangkat Lunak"
        jumbotronImg="./images/jurusan/jumbotron/jumbotronRpl.png"
        bgColor="#20388C"
      />
      <Purpose bg="bg-rpl" secondBg="second-bg-rpl" />
    </div>
  );
};

export default Rpl;
