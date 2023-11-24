import React, { useContext } from "react";
import styled from "styled-components";
import ProductContext from "../context/ProductContext";
import { ScrollToTopButton } from "../components";
import { Layout, GradientP, CollectionGrid, Button } from "../components";
import {
  ScrollElementDiv,
  ScrollRemoveElementDiv,
} from "../globalStyles/globals";

const CollectionNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  border: 1px solid #ff00f7;
  box-shadow: 10px 7px rgba(247, 0, 255, 0.5);
  padding: 25px;
  margin-bottom: 50px;
  > div:last-child {
    margin-top: 1em;
  }
`;

export default function AllCollectionPage() {
  const { collections } = useContext(ProductContext);
  return (
    <Layout paddingValues={true}>
      <ScrollElementDiv id="scrollTargetAdd"></ScrollElementDiv>
      <ScrollRemoveElementDiv id="scrollTargetRemove"></ScrollRemoveElementDiv>
      <CollectionNoteWrapper>
        <GradientP font={`'Lato', sans-serif`} color={`#035efc, #ff00f7`}>
          Neon Unicorn Collections give you an entire outfit idea that you can
          customize, confirm, and add to your cart from one convenient page. Our
          collections are hand picked, fashion forward, clothing gems selected
          by our in house fashion expert. Browse our unique collections and find
          your new signature look! Each item in a collection may be purchased
          separately as well, you're in control! Buy an entire collection, or
          buy it one piece at a time. It's your choice! Check our style blog for
          new and upcoming collections!
        </GradientP>
        <div>
          <Button>Go to Style Blog</Button>
        </div>
      </CollectionNoteWrapper>
      <CollectionGrid collections={collections} />
      <ScrollToTopButton zNumber={2} />
    </Layout>
  );
}
