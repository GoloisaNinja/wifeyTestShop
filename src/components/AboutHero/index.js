import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import smoothscroll from "smoothscroll-polyfill";
import { useStaticQuery, graphql } from "gatsby";
import { Button } from "../Button";
import { AboutHeroWrapper } from "./styles";

export function AboutHero() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dressShopping.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const handleScroll = e => {
    smoothscroll.polyfill();
    const yOffset = -5;
    const navTo = document.getElementById(e.target.innerHTML);
    const y = navTo.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <AboutHeroWrapper id="noScroll">
      <header>
        <Button onClick={handleScroll}>Why Neon Unicorn</Button>
        <Button onClick={handleScroll}>Beauty and the Nerd</Button>
        <Button onClick={handleScroll}>What we do</Button>
        <Button onClick={handleScroll}>Neon Social</Button>
        <Button>Contact Us</Button>
      </header>
      <div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="an illustration of a women shopping for pretty dresses"
        />
      </div>
    </AboutHeroWrapper>
  );
}
