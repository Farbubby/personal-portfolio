export function animateOnView() {
  const options = {
    rootMargin: "0px",
    threshold: 0.8,
  };

  const animateFadeDownOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.remove("opacity-0");
        element.target.classList.add("animate-fadeDown");
      }
    });
  };

  const animateFadeUpOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.remove("opacity-0");
        element.target.classList.add("animate-fadeUp");
      }
    });
  };

  const animateFadeLeftOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.remove("opacity-0");
        element.target.classList.add("animate-fadeLeft");
      }
    });
  };

  const animateFadeRightOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.remove("opacity-0");
        element.target.classList.add("animate-fadeRight");
      }
    });
  };

  // Down fade in animation
  const downObserver = new IntersectionObserver(
    animateFadeDownOnScroll,
    options
  );
  const downElements = document.querySelectorAll(".animate-down");

  downElements.forEach((target) => {
    downObserver.observe(target);
  });

  // Up fade in animation
  const upObserver = new IntersectionObserver(animateFadeUpOnScroll, options);
  const upElements = document.querySelectorAll(".animate-up");

  upElements.forEach((target) => {
    upObserver.observe(target);
  });

  // Left fade in animation
  const leftObserver = new IntersectionObserver(
    animateFadeLeftOnScroll,
    options
  );
  const leftElements = document.querySelectorAll(".animate-left");

  leftElements.forEach((target) => {
    leftObserver.observe(target);
  });

  // Right fade in animation
  const rightObserver = new IntersectionObserver(
    animateFadeRightOnScroll,
    options
  );
  const rightElements = document.querySelectorAll(".animate-right");

  rightElements.forEach((target) => {
    rightObserver.observe(target);
  });
}

export function smoothScrollTo(id: string) {
  let element = document.getElementById(id);

  if (window == null) return;
  if (element == null) return;

  window.scrollTo({ behavior: "smooth", top: element.offsetTop - 90 });
}

export function smoothScrollToBottom() {
  if (window == null) return;

  window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight });
}
