let menuBtn = document.querySelector(".hamburguer");
let menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("open");
});

gsap.from("header", { duration: 4, opacity: 0, ease: "rough" });
gsap.from(".titular", { duration: 4, opacity: 0, ease: "rough" });
gsap.from(".cards", { duration: 4, opacity: 0, ease: "rough" });
gsap.to(".fa-plane", {
  duration: 3,
  ease: "slow(0.7, 0.7, false)",
  x: 100,
});
