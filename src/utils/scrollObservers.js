export const returnCallback = (elem, methodType, classAsString) => {
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

export const createObserverFunction = (elem, callback, options) => {
  let observer = new IntersectionObserver(callback, options);
  observer.observe(elem);
  return observer;
};
