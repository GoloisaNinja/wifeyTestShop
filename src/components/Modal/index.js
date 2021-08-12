import React, { useState, useEffect } from "react";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import { Button } from "../Button";
import { BlueUnicornLogo } from "../BlueUnicornLogo";
import { ModalWrapper, ModalOverlay } from "./styles";

export function Modal({ dismiss, content }) {
  const [isExploding, setIsExploding] = useState(false);
  const handleDismiss = () => {
    setIsExploding(false);
    dismiss();
  };
  useEffect(() => {
    setIsExploding(content.confetti);
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
        <h4>{content.title}</h4>
        <h5>{content.product}</h5>
        <h5>{content.addedVariant}</h5>
        <h6>Item Count: {content.quantity}</h6>
        <Button onClick={handleDismiss}>Awesome!</Button>
      </ModalWrapper>
      <ModalOverlay></ModalOverlay>
    </>
  );
}
