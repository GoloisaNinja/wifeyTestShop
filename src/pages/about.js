import React, { useEffect } from "react";
import {
  Layout,
  AboutHero,
  AboutWhy,
  AboutUs,
  ScrollToTopButton,
} from "../components";

const About = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollTarget = document.getElementById("Beauty and the Nerd");
      const myScrollBtn = document.getElementById("myScrollBtn");
      const myIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            myScrollBtn.classList.add("showBtn");
          } else {
            myScrollBtn.classList.remove("showBtn");
          }
        });
      };
      let observer = new IntersectionObserver(myIntersect);
      observer.observe(scrollTarget);
    }
  }, []);

  return (
    <Layout paddingValues={true}>
      <AboutHero />
      <AboutWhy />
      <AboutUs />
      <ScrollToTopButton />
    </Layout>
  );
};
export default About;
