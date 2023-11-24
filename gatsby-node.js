const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
            media {
              id
            }
            variants {
              id
              storefrontId
              image {
                src
                gatsbyImageData
              }
            }
          }
        }
      }
      allShopifyCollection {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
      allShopifyMediaImage {
        edges {
          node {
            id
            shopifyId
            image {
              src
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  let images = [];
  data.allShopifyMediaImage.edges.forEach(({ node }) => {
    images.push({
      id: node.id,
      src: node.image.src,
      gatsbyImageData: node.image.gatsbyImageData,
    });
  });

  data.allShopifyProduct.edges.forEach(({ node }) => {
    const mediaIds = node.media.map(m => m.id);
    let productImages = [];
    images.forEach(i => {
      if (mediaIds.includes(i.id)) {
        productImages.push(i);
      }
    });
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
        images: productImages,
      },
      component: path.resolve(`./src/templates/ProductTemplate/index.js`),
    });
  });
  data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `collection/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
        images,
      },
      component: path.resolve(`./src/templates/CollectionTemplate/index.js`),
    });
  });
};
