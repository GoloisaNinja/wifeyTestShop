import React from "react";
import { navigate } from "gatsby";
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
  const handleScroll = target => {
    smoothscroll.polyfill();
    const yOffset = -5;
    const targetMap = {
      1: "Why Neon Unicorn",
      2: "Our Story",
      3: "What we do",
      4: "Neon Social",
    };
    //const target = e.target.innerHtml;
    console.log(targetMap[target]);
    const navTo = document.querySelector(`[data-name="${targetMap[target]}"]`);
    console.log(navTo);
    const y = navTo.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <AboutHeroWrapper id="scrollTargetRemove">
      <header>
        <Button onClick={() => handleScroll(1)} id="animated-btn">
          Why Neon Unicorn
        </Button>
        <Button onClick={() => handleScroll(2)} id="animated-btn">
          Our Story
        </Button>
        <Button onClick={() => handleScroll(3)} id="animated-btn">
          What we do
        </Button>
        <Button onClick={() => handleScroll(4)} id="animated-btn">
          Neon Social
        </Button>
        <Button onClick={e => navigate(`/contact`)} id="animated-btn">
          Contact Us
        </Button>
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
