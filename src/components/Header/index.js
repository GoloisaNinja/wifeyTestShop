import React, { useState } from "react";
import { Logo } from "../Logo";
import { Link } from "gatsby";
import { MainMenu } from "../MainMenu";
import { HamburgerButton } from "../HamburgerButton";
import { ShoppingBag } from "../ShoppingBag";
import { Search } from "../Search";
import { HeaderWrapper, SearchWrapper } from "./styles";

export function Header() {
  const [clicked, setClicked] = useState(true);
  const handleToggle = () => {
    setClicked(!clicked);
    const menuBtn = document.getElementById("menu-btn");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu-drawer");
    const overlay = document.getElementById("menu-overlay");
    const myHtml = document.querySelector("html");
    const myBody = document.querySelector("body");
    if (clicked) {
      myHtml.classList.add("menuIsOpen");
      myBody.classList.add("menuIsOpen");
    } else {
      myHtml.classList.remove("menuIsOpen");
      myBody.classList.remove("menuIsOpen");
    }
    overlay?.classList.toggle("show");
    menuBtn?.classList.toggle("engaged");
    hamburger?.classList.toggle("engaged");
    menu?.classList.toggle("show");
  };
  return (
    <>
      <MainMenu handleToggle={handleToggle} />
      <HeaderWrapper>
        <HamburgerButton handleToggle={handleToggle} />
        <Link to="/">
          <Logo />
        </Link>
        <ShoppingBag />
      </HeaderWrapper>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </>
  );
}
