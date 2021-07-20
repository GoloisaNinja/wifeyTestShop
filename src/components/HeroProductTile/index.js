import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  HeroProductsWrapper,
  HeroProductsContentWrapper,
  HeroProductsText,
  HeroProductsSubText,
} from "./styles";

export function HeroProductTile() {
  const data = useStaticQuery(graphql`
    {
      file(relativeDirectory: { eq: "assets" }, name: { eq: "products-girl" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <HeroProductsWrapper>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="fashionable girl on a long stretch of road"
      />
      <HeroProductsContentWrapper>
        <div>
          <HeroProductsText>Beautiful Products</HeroProductsText>
          <HeroProductsSubText>
            Browse the entirety of our hand-picked and gorgeous product line.
            Pretty is just a click away.
          </HeroProductsSubText>
        </div>
      </HeroProductsContentWrapper>
    </HeroProductsWrapper>
  );
}
