import React from "react";
import { Layout, AboutHero, AboutWhy, AboutUs } from "../components";

const About = () => {
  return (
    <Layout paddingValues={true}>
      <AboutHero />
      <AboutWhy />
      <AboutUs />
    </Layout>
  );
};
export default About;
