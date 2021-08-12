import React, { useState, useEffect } from "react";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import { Button } from "../Button";
import { BlueUnicornLogo } from "../BlueUnicornLogo";
import { ModalWrapper, ModalOverlay, ProductDetailsWrapper } from "./styles";

export function CollectionModal({
  dismiss,
  content,
  collectionTitle,
  exploding,
}) {
  const [isExploding, setIsExploding] = useState(false);
  const handleDismiss = () => {
    setIsExploding(false);
    dismiss();
  };
  useEffect(() => {
    console.log("coll modal ran");
    setIsExploding(exploding);
  }, [setIsExploding]);
  return (
    <>
      <ModalWrapper>
        <BlueUnicornLogo />
        {isExploding && (
          <ConfettiExplosion
            force={0.4}
            duration={2000}
            particleCount={100}
            floorHeight={1000}
            floorWidth={1000}
          />
        )}
        <h4>Added {collectionTitle} to Bag!</h4>
        {content.map(product => (
          <ProductDetailsWrapper key={product.variantId}>
            <h5>
              {product.productTitle} : {product.variantTitle}
            </h5>
            <h6>Quantity added: {product.quantity}</h6>
          </ProductDetailsWrapper>
        ))}

        <Button onClick={handleDismiss}>Awesome!</Button>
      </ModalWrapper>
      <ModalOverlay></ModalOverlay>
    </>
  );
}
