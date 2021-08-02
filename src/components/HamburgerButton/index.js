import React from "react";
import { HamburgerButtonWrapper, Hamburger } from "./styles";

export function HamburgerButton() {
  const handleToggle = () => {
    const menuBtn = document.getElementById("menu-btn");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu-drawer");
    const overlay = document.getElementById("menu-overlay");
    menuBtn.classList.toggle("engaged");
    hamburger.classList.toggle("engaged");
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
  };
  return (
    <HamburgerButtonWrapper id="menu-btn" onClick={handleToggle}>
      <Hamburger id="hamburger"></Hamburger>
    </HamburgerButtonWrapper>
  );
}
