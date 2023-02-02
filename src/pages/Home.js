import React from "react";
import Navigation from "../components/layouts/navigationbar";
import Jumbotron from "../components/jumbotron";
import BarInfo from "../components/layouts/barInfo";
import AboutLead from "../components/aboutLead";
import Jurusan from "../components/jurusan";
import Footer from "../components/layouts/footer";

function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <BarInfo />
      <AboutLead />
      <Jurusan />
      <Footer footerImg="./images/background/Background3.png" />
    </React.Fragment>
  );
}

export default Home;
