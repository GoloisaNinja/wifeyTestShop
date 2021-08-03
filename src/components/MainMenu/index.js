import React from "react";
import { navigate } from "gatsby";
import { OverlayWrapper } from "../Overlay";
import { MenuLogo } from "../MenuLogo";
import {
  FaHome,
  FaThLarge,
  FaTshirt,
  FaShoppingBag,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { MenuWrapper, NavButton } from "./styles";

export function MainMenu({ handleToggle }) {
  const handleNav = destination => {
    handleToggle();
    setTimeout(() => {
      navigate(destination);
    }, 400);
  };
  return (
    <>
      <MenuWrapper id="menu-drawer">
        <div>
          <MenuLogo />
          <p>Site Navigation</p>
          <NavButton onClick={e => handleNav("/")} alt="Home Page">
            Home
            <FaHome />
          </NavButton>
          <NavButton
            onClick={e => handleNav("/all-collections")}
            alt="Collections Main Page"
          >
            Collections
            <FaThLarge />
          </NavButton>
          <NavButton
            onClick={e => handleNav("/all-products")}
            alt="All Products Page"
          >
            Products
            <FaTshirt />
          </NavButton>
          <NavButton onClick={e => handleNav("/")} alt="Cart Overview Page">
            Cart
            <FaShoppingBag />
          </NavButton>
          <NavButton
            onClick={e => handleNav("/")}
            alt="About Neon Unicorn Page"
          >
            About Neon Unicorn
            <FaInfoCircle />
          </NavButton>
          <NavButton onClick={e => handleNav("/")} alt="Contact Us Page">
            Contact Us
            <FaEnvelope />
          </NavButton>
        </div>
      </MenuWrapper>
      <OverlayWrapper id="menu-overlay" zvalue={"1"}></OverlayWrapper>
    </>
  );
}
