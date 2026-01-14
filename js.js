function updateHeroHeight() {
  const hero = document.querySelector(".hero");
  hero.style.height = window.innerHeight - 80 + "px";
}

window.addEventListener("resize", updateHeroHeight);
window.addEventListener("load", updateHeroHeight);
