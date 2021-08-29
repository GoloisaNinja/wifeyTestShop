import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GradientH2 } from "../GradientText";
import {
  FaUserFriends,
  FaThumbtack,
  FaVenus,
  FaGrinHearts,
  FaCreditCard,
} from "react-icons/fa";
import { AboutWhyWrapper, BlockWrapper, BlockContent } from "./styles";

export function AboutWhy() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "aboutWhy.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      allFile(filter: { relativePath: { regex: "/(undraw)/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 200)
              id
            }
          }
        }
      }
    }
  `);
  return (
    <AboutWhyWrapper id="Why Neon Unicorn">
      <div>
        <GradientH2
          font={`"Abril Fatface", cursive`}
          color={`#c800cf, #ff00f7`}
        >
          So Why Shop with Us?
        </GradientH2>
      </div>
      <div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="illustration of women choosing an online shopping experience"
        />
        <BlockWrapper>
          <BlockContent>
            <FaUserFriends /> We're Building a Community
          </BlockContent>
          <BlockContent>
            <FaThumbtack /> Support Small Business
          </BlockContent>
          <BlockContent>
            <FaGrinHearts /> Gorgeous Products
          </BlockContent>
          <BlockContent>
            <FaVenus /> Woman-Owned Business
          </BlockContent>
          <BlockContent>
            <FaCreditCard /> Value and Convenience
          </BlockContent>
        </BlockWrapper>
      </div>
    </AboutWhyWrapper>
  );
}
