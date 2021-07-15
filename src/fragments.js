import { graphql } from "gatsby";

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    shopifyId
    title
    description
    images {
      id
      gatsbyImageData(placeholder: "BLURRED")
    }
  }
`;
