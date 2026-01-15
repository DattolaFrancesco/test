const header = document.querySelector("header");
let toggle = false;
function updateHeroHeight() {
  const hero = document.querySelector(".hero");
  hero.style.height = window.innerHeight - header.getBoundingClientRect().height + "px";
}

window.addEventListener("load", updateHeroHeight);

function navbarbtn() {
  toggle = true;
  setTimeout(() => {
    if (!toggle) {
      hero.style.height = window.innerHeight + header.getBoundingClientRect().height + "px";
      console.log(window.innerHeight);
      console.log(header.getBoundingClientRect().height);
      toggle = false;
    }
  }, 500);
}
