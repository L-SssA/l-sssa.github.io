const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (window.gsap && !prefersReducedMotion) {
  const gsap = window.gsap;
  const intro = gsap.timeline({ defaults: { ease: "power2.out" } });

  intro
    .from(".topbar", { y: -10, autoAlpha: 0, duration: 0.55 })
    .from(".intro > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.25")
    .from(".section-heading", { y: 12, autoAlpha: 0, duration: 0.5 }, "-=0.25")
    .from(".stack-group", { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.12 }, "-=0.2")
    .from(".tech-card", { y: 8, autoAlpha: 0, duration: 0.35, stagger: 0.035 }, "-=0.2")
    .from(".footer", { autoAlpha: 0, duration: 0.4 }, "-=0.15");

  document.querySelectorAll(".tech-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -3, duration: 0.18, ease: "power1.out" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.22, ease: "power1.out" });
    });
  });
}