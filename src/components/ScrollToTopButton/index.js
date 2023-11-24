import React, { useEffect } from "react";
import {
  createObserverFunction,
  returnCallback,
} from "../../utils/scrollObservers";
import smoothscroll from "smoothscroll-polyfill";
import { FaChevronUp } from "react-icons/fa";
import { ScrollButton } from "./styles";

export function ScrollToTopButton({ znumber }) {
  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollTargetAdd = document.getElementById("scrollTargetAdd");
      const scrollTargetRemove = document.getElementById("scrollTargetRemove");
      const myScrollBtn = document.getElementById("myScrollBtn");

      createObserverFunction(
        scrollTargetAdd,
        returnCallback(myScrollBtn, "add", "showBtn")
      );
      createObserverFunction(
        scrollTargetRemove,
        returnCallback(myScrollBtn, "remove", "showBtn")
      );
    }
  }, []);
  return (
    <ScrollButton znumber={znumber} id="myScrollBtn" onClick={handleClick}>
      <FaChevronUp />
    </ScrollButton>
  );
}
