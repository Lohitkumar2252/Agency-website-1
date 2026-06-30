import React from "react";
import Container from "./Container";
import CollectionSection from "./CollectionSection";
import AboutSection from "./AboutSection";


const Home = (props) => {
    



  return (
    <div>
      <Container Num={props.Num} setNum={props.setNum} color={props.color} banner={props.banner} />
      <CollectionSection />
      <AboutSection />
    </div>
  );
};

export default Home;
