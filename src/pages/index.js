import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { graphql, useStaticQuery } from "gatsby";
import { Layout, HeroTile, Featured, ScrollToTopButton } from "../components";
import { Link } from "gatsby";
import {
  ScrollElementDiv,
  ScrollRemoveElementDiv,
} from "../globalStyles/globals";

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  const saleCollection = collections.find(
    collection => collection.title === "SALE"
  );
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "assets" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);
  const floralGirl = {
    image: data.allFile.edges.find(({ node }) => node.name === "floral-girl"),
    altText: `A pretty woman with a floral crown wearing stylish clothes`,
    titleText: `Stunning Collections`,
    subText: `Collections curated by our style expert. Because finding your next look should be easy.`,
    overlayColor: `rgba(189, 0, 164, 0.5)`,
  };
  const productGirl = {
    image: data.allFile.edges.find(({ node }) => node.name === "products-girl"),
    altText: `A pretty woman wearing stylish clothes walking along an outstretched road`,
    titleText: `Beautiful Products`,
    subText: `Browse the entirety of our hand-picked product line.  Gorgeous is just a click away.`,
    overlayColor: `rgba(112, 0, 161, 0.5)`,
  };
  const celebration = {
    image: data.allFile.edges.find(({ node }) => node.name === "celebration"),
    altText: `A group of young women looking happy in a field of yellow flowers`,
    titleText: `Featured Sales`,
    subText: `Our prettiest products at drastically reduced prices! Lovely shouldn't break the bank.`,
    overlayColor: `rgba(0, 122, 86, 0.5)`,
  };

  return (
    <Layout>
      <ScrollElementDiv id="scrollTargetAdd"></ScrollElementDiv>
      <ScrollRemoveElementDiv id="scrollTargetRemove"></ScrollRemoveElementDiv>
      <Link to="/all-collections">
        <HeroTile
          image={floralGirl.image.node.childImageSharp.gatsbyImageData}
          altText={floralGirl.altText}
          titleText={floralGirl.titleText}
          subText={floralGirl.subText}
          overlayColor={floralGirl.overlayColor}
        />
      </Link>
      <Link to="/all-products">
        <HeroTile
          image={productGirl.image.node.childImageSharp.gatsbyImageData}
          altText={productGirl.altText}
          titleText={productGirl.titleText}
          subText={productGirl.subText}
          overlayColor={productGirl.overlayColor}
        />
      </Link>
      <Link
        to={`/all-products?c=${encodeURIComponent(
          saleCollection.storefrontId
        )}`}
      >
        <HeroTile
          image={celebration.image.node.childImageSharp.gatsbyImageData}
          altText={celebration.altText}
          titleText={celebration.titleText}
          subText={celebration.subText}
          overlayColor={celebration.overlayColor}
        />
      </Link>
      <Featured />
      <ScrollToTopButton />
    </Layout>
  );
};

export default IndexPage;
