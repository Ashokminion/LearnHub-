// Animate the title and buttons on load
gsap.from(".animate-title", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "bounce",
});
gsap.from("button", { duration: 1.2, x: -200, opacity: 0, stagger: 0.2 });
gsap.from("input", { duration: 1, x: 200, opacity: 0, stagger: 0.2 });
