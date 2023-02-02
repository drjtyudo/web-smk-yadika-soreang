import React from "react";
import SimpleJumbotron from "../../components/simpleJumbotron.js";
import Navigation from "../../components/layouts/navigationbar.js";
import Purpose from "../../components/Purpose.js";

const Hotel = () => {
  return (
    <div className="hotel">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="Perhotelan"
        jumbotronImg="./images/jurusan/jumbotron/jumbotronHtl.png"
        bgColor="#7B500FB2"
      />
      <Purpose bg="bg-htl" secondBg="second-bg-htl" />
    </div>
  );
};

export default Hotel;
