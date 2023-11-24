import React, { useEffect } from "react";
import { createObserverFunction } from "../utils/scrollObservers";
import {
  Layout,
  AboutHero,
  AboutWhy,
  AboutUs,
  AboutWhat,
  AboutSocial,
  ScrollToTopButton,
} from "../components";

const About = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const animatedBtns = document.querySelectorAll("#animated-btn");
      const fadeBlocks = document.querySelectorAll("#fadeBlock");
      const blockTarget = document.getElementById("fadeBlockWrapper");

      const returnLoopCallback = (elements, classAsString) => {
        return function (entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (classAsString === "animate") {
                elements.forEach(el => {
                  el?.classList.add("animate");
                });
              } else {
                elements.forEach(el => {
                  el?.classList.add("fade");
                });
              }
            }
          });
        };
      };
      createObserverFunction(
        document.getElementById("scrollTargetRemove"),
        returnLoopCallback(animatedBtns, "animate")
      );
      createObserverFunction(
        blockTarget,
        returnLoopCallback(fadeBlocks, "fade")
      );
    }
  }, []);

  return (
    <Layout paddingvalues="true">
      <AboutHero />
      <AboutWhy />
      <AboutUs />
      <AboutWhat />
      <AboutSocial />
      <ScrollToTopButton />
    </Layout>
  );
};
export default About;
