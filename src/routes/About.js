import React from "react";
import Detail from "../components/Detail";

function About() {
  const text = "About me.... I graduated korean aerospace university"
  
  return <Detail title="ABOUT" img="Algorithm_img.jpg" content={text}/>;
}

export default About;
