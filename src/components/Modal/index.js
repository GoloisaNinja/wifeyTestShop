import React, { useState, useEffect } from "react";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import { Button } from "../Button";
import wowUnicornMedium from "../../images/wowUnicornMedium.gif";
import { ModalWrapper, ModalOverlay, UnicornWrapper } from "./styles";

export function Modal({ dismiss, content }) {
  const [isExploding, setIsExploding] = useState(false);
  const handleDismiss = () => {
    setIsExploding(false);
    dismiss();
  };
  useEffect(() => {
    setIsExploding(true);
  }, [setIsExploding]);
  return (
    <>
      <ModalWrapper>
        <UnicornWrapper>
          <img
            src={wowUnicornMedium}
            width={"100"}
            height={"150"}
            alt="a unicorn that is very pleased"
          />
        </UnicornWrapper>
        {isExploding && (
          <ConfettiExplosion
            force={0.4}
            duration={2000}
            particleCount={100}
            floorHeight={1000}
            floorWidth={1000}
          />
        )}
        <h4>
          Yesssh! {content.product} {content.message}
        </h4>
        <Button $inverse="true" onClick={handleDismiss}>
          DISMISS
        </Button>
      </ModalWrapper>
      <ModalOverlay></ModalOverlay>
    </>
  );
}
