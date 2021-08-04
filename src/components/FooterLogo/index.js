import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function FooterLogo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "neonFooterTrans.png" }) {
        childImageSharp {
          fixed(width: 220) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <Img fixed={data.file.childImageSharp.fixed} alt="neon unicorn sign logo" />
  );
}
