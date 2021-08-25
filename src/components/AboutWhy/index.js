import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GradientH2 } from "../GradientText";
import { AboutWhyWrapper, AboutWhyText } from "./styles";

export function AboutWhy() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "aboutWhy.png" }) {
        childImageSharp {
          gatsbyImageData
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
          Why Neon Unicorn?
        </GradientH2>
      </div>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="illustration of women choosing an online shopping experience"
      />

      <AboutWhyText>
        <p>
          The interwebs are full of amazing shops and places to buy pretty
          things. So why should you shop at Neon Unicorn? What sets us apart
          from all the other shopping experiences out there? At Neon Unicorn,
          we'd like to think we've addressed several of the larger problems that
          can make your online shopping experience miserable. When we shop
          online, our biggest concerns are price, quality, reliability, payment
          security, and excessive prettiness. With those points in mind, we are
          proud to bring you aggressively priced, high quality, gloriously
          pretty pieces from all over the globe. And when you're ready to
          checkout with your new pretties, you'll be directed to the Shopify
          Payment Portal, for a secure, streamlined, and trusted checkout
          process that allows you to use whatever payment method works best for
          you!
        </p>
      </AboutWhyText>
    </AboutWhyWrapper>
  );
}
