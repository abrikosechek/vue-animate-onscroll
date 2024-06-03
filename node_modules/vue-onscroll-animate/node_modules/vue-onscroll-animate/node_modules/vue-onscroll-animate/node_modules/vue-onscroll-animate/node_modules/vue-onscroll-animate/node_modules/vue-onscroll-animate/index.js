const animatedScrollObserver = (className) =>
  new IntersectionObserver((entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add(`enter-${className}`);
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  });

export default {
  created(el, binding) {
    const classModifier = binding.value || "onscroll";
    el.classList.add(`before-enter-${classModifier}`);
    animatedScrollObserver(classModifier).observe(el);
  },
};
