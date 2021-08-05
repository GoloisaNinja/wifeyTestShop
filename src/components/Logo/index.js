import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function Logo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "shopLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
}
