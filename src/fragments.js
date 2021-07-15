import { graphql } from "gatsby";

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    shopifyId
    title
    description
    images {
      gatsbyImageData(placeholder: "BLURRED", width: 300)
      id
    }
  }
`;
