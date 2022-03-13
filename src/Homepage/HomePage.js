import React from "react";
import Header from "../Components/Header";
import Interest from "../HomeScreens/Interest";

import Services from "../HomeScreens/Services";
import Testimony from "../HomeScreens/Slideview/Testimony";

import Team from "../HomeScreens/Team";

import Welcome from "../HomeScreens/Welcome";
import Works from "../HomeScreens/Works";

const HomePage = () => {
  return (
    <div>
      {" "}
      <Header /> <Welcome />
      <Services />
      <Works />
      <Testimony />
      <Interest />
      <Team />
    </div>
  );
};

export default HomePage;
