import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { FaChevronUp } from "react-icons/fa";
import { ScrollButton } from "./styles";

export function ScrollToTopButton({ zNumber }) {
  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ScrollButton zNumber={zNumber} id="myScrollBtn" onClick={handleClick}>
      <FaChevronUp />
    </ScrollButton>
  );
}
