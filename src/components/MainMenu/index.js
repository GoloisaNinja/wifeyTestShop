import React from "react";
import { navigate } from "gatsby";
import { OverlayWrapper } from "../Overlay";
import { BlueUnicornLogo } from "../BlueUnicornLogo";
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
    navigate(destination);
  };
  return (
    <>
      <MenuWrapper id="menu-drawer">
        <div>
          <BlueUnicornLogo />
          <p>Neon Navigation</p>
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
          <NavButton onClick={e => handleNav("/cart")} alt="Cart Overview Page">
            Shopping Bag
            <FaShoppingBag />
          </NavButton>
          <NavButton
            onClick={e => handleNav("/about")}
            alt="About Neon Unicorn Page"
          >
            About Us
            <FaInfoCircle />
          </NavButton>
          <NavButton onClick={e => handleNav("/contact")} alt="Contact Us Page">
            Contact Us
            <FaEnvelope />
          </NavButton>
        </div>
      </MenuWrapper>
      <OverlayWrapper
        id="menu-overlay"
        $zvalue={"2"}
        onClick={handleToggle}
      ></OverlayWrapper>
    </>
  );
}
