import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import CartContext from "../../context/CartContext";
import {
  CartItem,
  CartItemImageWrapper,
  CartHeader,
  CartFooter,
  Footer,
  ShopifyNoteWrapper,
  UnicornWrapper,
} from "./styles";
import { CartQuantityAdjuster } from "../CartQuantityAdjuster";
import { CartRemoveLineItem } from "../CartRemoveLineItem";
import { Button } from "../Button";
import { GradientH1, GradientH4, GradientP } from "../GradientText";
import confusedUnicorn from "../../images/confusedUnicorn.gif";
import { navigate } from "@reach/router";

export function CartContents() {
  const data = useStaticQuery(graphql`
    {
      allShopifyProductVariant {
        edges {
          node {
            shopifyId
            inventoryQuantity
            image {
              src
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const { checkout, updateLineItem } = useContext(CartContext);
  const variantImageMap = {};
  checkout?.lineItems.forEach(lineItem => {
    variantImageMap[lineItem.variant.image.src] = {};
  });
  data.allShopifyProductVariant.edges.forEach(({ node }) => {
    for (let key in variantImageMap) {
      if (node.image.src === key) {
        variantImageMap[key] = node.image.gatsbyImageData;
      }
    }
  });
  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem([{ quantity, variantId }]);
  };

  return (
    <section>
      <GradientH1 font={`'Abril Fatface', cursive`} color={`#ff00f7, #035efc`}>
        Shopping Bag
      </GradientH1>
      {!!checkout?.lineItems && checkout?.paymentDue !== "0.00" && (
        <>
          <ShopifyNoteWrapper>
            <GradientP font={`'Lato', sans-serif`} color={`#035efc, #ff00f7`}>
              Neon Unicorn uses the extremely powerful and secure Shopify
              Checkout! Purchase with confidence using your preferred payment
              method. Choosing checkout will redirect you to the Shopify Payment
              Portal.
            </GradientP>
          </ShopifyNoteWrapper>
          <CartHeader>
            <div>Product</div>
            {/* <div>Unit price</div> */}
            <div>Quantity</div>
            <div>Amount</div>
          </CartHeader>
        </>
      )}

      {checkout?.lineItems?.map(lineItem => (
        <CartItem key={lineItem.variant.id}>
          <div>
            <div>{lineItem.title}</div>
            <div>
              {lineItem.variant.title === "Default Title"
                ? ""
                : lineItem.variant.title}
            </div>
            <CartItemImageWrapper>
              <GatsbyImage
                image={variantImageMap[lineItem.variant.image.src]}
                alt={`product image for ${lineItem.variant.title}`}
              />
            </CartItemImageWrapper>

            <div>${lineItem.variant.price.amount}</div>
          </div>
          {/* <div>${lineItem.variant.price}</div> */}
          <div>
            <CartQuantityAdjuster
              item={lineItem}
              variant={data.allShopifyProductVariant.edges.find(
                ({ node }) => node.shopifyId === lineItem.variant.id
              )}
              onAdjust={handleAdjustQuantity}
            />
          </div>
          <div>
            ${(lineItem.quantity * lineItem.variant.price.amount).toFixed(2)}
          </div>
          <div>
            <CartRemoveLineItem lineItemId={lineItem.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && checkout?.paymentDue !== "0.00" && (
        <CartFooter>
          <div>
            <strong>Total: </strong>
          </div>
          <div>
            <span>${checkout?.totalPrice.amount}</span>
          </div>
        </CartFooter>
      )}
      {(!checkout?.lineItems || checkout?.paymentDue === "0.00") && (
        <>
          <GradientH4
            font={`'Abril Fatface', cursive`}
            color={`#035efc, #ff00f7`}
          >
            sad unicorn empties...
          </GradientH4>
          <UnicornWrapper>
            <img
              src={confusedUnicorn}
              alt="a blinking unicorn that is confused at why your shopping bag is empty"
            />
          </UnicornWrapper>
        </>
      )}
      <Footer>
        <div>
          <Button width={"100%"} onClick={() => navigate(-1)}>
            Keep Shopping
          </Button>
        </div>
        <div>
          {!!checkout?.webUrl && checkout?.paymentDue !== "0.00" && (
            <Button
              width={"100%"}
              onClick={() => (window.location.href = checkout.webUrl)}
            >
              Checkout
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
}
