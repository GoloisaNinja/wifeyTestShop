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
      const scrollTargetOne = document.getElementById("Beauty and the Nerd");
      const scrollTargetTwo = document.getElementById("What we do");
      const myScrollBtn = document.getElementById("myScrollBtn");
      const removeClassFromBtn = entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            myScrollBtn.classList.remove("showBtn");
          }
        });
      };
      const addClassToBtn = entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            myScrollBtn.classList.add("showBtn");
          }
        });
      };
      const createObserverFunction = (elem, callback) => {
        let observer = new IntersectionObserver(callback);
        observer.observe(elem);
        return observer;
      };
      createObserverFunction(scrollTargetOne, addClassToBtn);
      createObserverFunction(scrollTargetTwo, addClassToBtn);
      createObserverFunction(noScrollTarget, removeClassFromBtn);
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
