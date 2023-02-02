import React from "react";
import Footer from "../components/layouts/footer";
import Navigation from "../components/layouts/navigationbar";
import SimpleJumbotron from "../components/simpleJumbotron";

function Profile() {
  return (
    <div className="profile">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="Profile Sekolah"
        jumbotronImg="./images/background/background5.png"
      />
      <Footer footerImg="./images/background/Background3.png" />
    </div>
  );
}

export default Profile;
