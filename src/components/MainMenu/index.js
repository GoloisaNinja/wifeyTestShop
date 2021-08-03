import React from "react";
import { navigate } from "gatsby";
import { OverlayWrapper } from "../Overlay";
import { MenuWrapper, NavButton } from "./styles";

export function MainMenu({ handleToggle }) {
  const handleNav = destination => {
    navigate(destination);
    handleToggle();
  };
  return (
    <>
      <MenuWrapper id="menu-drawer">
        <div>
          <p>Site Navigation</p>
          <NavButton onClick={e => handleNav("/")} alt="Home Page">
            Home
          </NavButton>
          <NavButton
            onClick={e => handleNav("/all-collections")}
            alt="Collections Main Page"
          >
            Collections
          </NavButton>
          <NavButton
            onClick={e => handleNav("/all-products")}
            alt="All Products Page"
          >
            Products
          </NavButton>
          <NavButton onClick={e => handleNav("/")} alt="Cart Overview Page">
            Cart
          </NavButton>
          <NavButton
            onClick={e => handleNav("/")}
            alt="About Neon Unicorn Page"
          >
            About Neon Unicorn
          </NavButton>
          <NavButton onClick={e => handleNav("/")} alt="Contact Us Page">
            Contact Us
          </NavButton>
        </div>
      </MenuWrapper>
      <OverlayWrapper id="menu-overlay" zvalue={"1"}></OverlayWrapper>
    </>
  );
}
