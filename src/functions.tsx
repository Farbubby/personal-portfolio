export function animateOnView() {
  const animateOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.remove("opacity-0");
        element.target.classList.add("animate-fadeDown");
      }
    });
  };

  const animateSlowOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.remove("opacity-0");
        element.target.classList.add("animate-fadeUp");
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll);
  const elements = document.querySelectorAll(".animate-down");

  const observer1 = new IntersectionObserver(animateSlowOnScroll);
  const elements1 = document.querySelectorAll(".animate-up");

  elements.forEach((target) => {
    observer.observe(target);
  });

  elements1.forEach((target) => {
    observer1.observe(target);
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
