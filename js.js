function updateHeroHeight() {
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");
  hero.style.height = window.innerHeight - header.getBoundingClientRect().height + "px";
}

window.addEventListener("resize", updateHeroHeight);
window.addEventListener("load", updateHeroHeight);
