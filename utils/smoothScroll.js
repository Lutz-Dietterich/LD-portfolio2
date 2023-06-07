export function smoothScroll(targetId) {
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetOffset = targetElement.offsetTop;
    const duration = 1000;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
      duration: duration,
    });
  }
}
