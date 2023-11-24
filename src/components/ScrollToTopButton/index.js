import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { FaChevronUp } from "react-icons/fa";
import { ScrollButton } from "./styles";

export function ScrollToTopButton({ zNumber }) {
  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollTargetAdd = document.getElementById("scrollTargetAdd");
      const scrollTargetRemove = document.getElementById("scrollTargetRemove");
      const myScrollBtn = document.getElementById("myScrollBtn");

      const returnCallback = (elem, methodType, classAsString) => {
        return function (entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (methodType === "add") {
                elem.classList.add(classAsString);
              } else {
                elem.classList.remove(classAsString);
              }
            }
          });
        };
      };

      const createObserverFunction = (elem, callback, options) => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(elem);
        return observer;
      };
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
    <ScrollButton zNumber={zNumber} id="myScrollBtn" onClick={handleClick}>
      <FaChevronUp />
    </ScrollButton>
  );
}
