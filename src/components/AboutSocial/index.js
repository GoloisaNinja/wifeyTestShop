import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH1, GradientP } from "../GradientText";
import { FaTwitter, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import {
  AboutSocialWrapper,
  AboutSocialBanner,
  SocialContent,
  BlogWrapper,
  BlogContentWrapper,
  BlogContent,
  SocialIcons,
} from "./styles";

export function AboutSocial() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "pretty.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <AboutSocialWrapper id="Neon Social">
      <AboutSocialBanner>
        <GradientH1 font={`"Abril Fatface", cursive`} color={`#fff, #ccc`}>
          Unicorns are naturally social
        </GradientH1>
        <GradientP font={`"Lato", sans-serif`} color={`#fff, #ccc`}>
          We pride ourselves on our community. Visit our Style Blog for fashion
          tips and upcoming products to be featured on Neon Unicorn. Follow us
          on social media for the latest Neon News and exclusive content!
        </GradientP>
      </AboutSocialBanner>
      <SocialContent>
        <Link to="/">
          <BlogWrapper>
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="An artistic depiction of a woman's face with deep purple and pink colors - represents our fashion blog"
            />
            <BlogContentWrapper>
              <BlogContent>Unicorn Style Blog</BlogContent>
            </BlogContentWrapper>
          </BlogWrapper>
        </Link>
        <SocialIcons>
          <FaTwitter />
          <FaInstagramSquare />
          <FaFacebook />
        </SocialIcons>
      </SocialContent>
    </AboutSocialWrapper>
  );
}
