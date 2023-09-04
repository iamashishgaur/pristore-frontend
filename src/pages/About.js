import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { styled } from "styled-components";

const AboutContainer = styled.div``;
const About = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <BreadCrumb title="About Us" />
      <AboutContainer></AboutContainer>
    </>
  );
};

export default About;
