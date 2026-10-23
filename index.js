const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (window.gsap && !prefersReducedMotion) {
  const gsap = window.gsap;
  const intro = gsap.timeline({ defaults: { ease: "power2.out" } });

  intro
    .from(".topbar", { y: -10, autoAlpha: 0, duration: 0.55 })
    .from(".intro > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.25");

  const animateWhenVisible = (selector, animate) => {
    const element = document.querySelector(selector);

    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        animate();
      }
    }, { threshold: 0.15 });

    observer.observe(element);
  };

  animateWhenVisible(".projects", () => {
    gsap.timeline({ defaults: { ease: "power2.out" } })
      .from(".projects .section-heading", { y: 12, autoAlpha: 0, duration: 0.5 })
      .from(".project-card", { y: 14, autoAlpha: 0, duration: 0.45, stagger: 0.12 }, "-=0.2");
  });

  animateWhenVisible(".stack", () => {
    gsap.timeline({ defaults: { ease: "power2.out" } })
      .from(".stack .section-heading", { y: 12, autoAlpha: 0, duration: 0.5 })
      .from(".stack-group", { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.12 }, "-=0.2")
      .from(".tech-card", { y: 8, autoAlpha: 0, duration: 0.35, stagger: 0.035 }, "-=0.2");
  });

  animateWhenVisible(".footer", () => {
    gsap.from(".footer", { autoAlpha: 0, duration: 0.4 });
  });

  document.querySelectorAll(".tech-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -3, duration: 0.18, ease: "power1.out" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.22, ease: "power1.out" });
    });
  });
}