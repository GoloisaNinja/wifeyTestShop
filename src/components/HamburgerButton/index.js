import React from "react";
import { HamburgerButtonWrapper, Hamburger } from "./styles";

export function HamburgerButton({ handleToggle }) {
  const onClick = () => {
    handleToggle();
  };
  return (
    <HamburgerButtonWrapper id="menu-btn" onClick={onClick}>
      <Hamburger id="hamburger"></Hamburger>
    </HamburgerButtonWrapper>
  );
}
