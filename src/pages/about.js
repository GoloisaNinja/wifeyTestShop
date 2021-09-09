import React, { useEffect } from "react";
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
      const noScrollTarget = document.getElementById("noScroll");
      const scrollTargetOne = document.getElementById("Our Story");
      const myScrollBtn = document.getElementById("myScrollBtn");
      const animatedBtns = document.querySelectorAll("#animated-btn");
      const fadeBlocks = document.querySelectorAll("#fadeBlock");
      const blockTarget = document.getElementById("fadeBlockWrapper");

      const returnCallback = (elem, methodType, classAsString) => {
        return function (entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (methodType === "add") {
                elem.classList.add(classAsString);
              } else {
                elem.classList.remove(classAsString);
              }
            }
          });
        };
      };
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
      // const addAnimateClass = entries => {
      //   entries.forEach(entry => {
      //     if (entry.isIntersecting) {
      //       animatedBtns.forEach(btn => {
      //         btn?.classList.add("animate");
      //       });
      //     }
      //   });
      // };

      const createObserverFunction = (elem, callback, options) => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(elem);
        return observer;
      };
      createObserverFunction(
        scrollTargetOne,
        returnCallback(myScrollBtn, "add", "showBtn")
      );
      createObserverFunction(
        noScrollTarget,
        returnCallback(myScrollBtn, "remove", "showBtn")
      );
      createObserverFunction(
        noScrollTarget,
        returnLoopCallback(animatedBtns, "animate")
      );
      createObserverFunction(
        blockTarget,
        returnLoopCallback(fadeBlocks, "fade")
      );
    }
  }, []);

  return (
    <Layout paddingValues={true}>
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
