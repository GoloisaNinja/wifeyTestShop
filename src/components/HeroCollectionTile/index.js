import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  HeroCollectionWrapper,
  HeroCollectionContentWrapper,
  HeroCollectionText,
  HeroCollectionSubText,
} from "./styles";

export function HeroCollectionTile() {
  const data = useStaticQuery(graphql`
    {
      file(relativeDirectory: { eq: "assets" }, name: { eq: "floral-girl" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <HeroCollectionWrapper>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="girl with floral crown"
      />
      <HeroCollectionContentWrapper>
        <div>
          <HeroCollectionText>Stunning Collections</HeroCollectionText>
          <HeroCollectionSubText>
            Collections curated by our style expert. Because finding your next
            look should be easy.
          </HeroCollectionSubText>
        </div>
      </HeroCollectionContentWrapper>
    </HeroCollectionWrapper>
  );
}
