export function animateOnView() {
  const animateOnScroll = (elements: any) => {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        element.target.classList.add("animate-fadeDown");
      } else {
        element.target.classList.remove("animate-fadeDown");
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll);
  const elements = document.querySelectorAll(".animate-fadeDown");

  elements.forEach(function (target) {
    observer.observe(target);
  });
}

export function smoothScrollTo(id: string) {
  let element = document.getElementById(id);

  if (window == null) return;
  if (element == null) return;

  window.scrollTo({ behavior: "smooth", top: element.offsetTop - 90 });
}
