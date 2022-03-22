//** Variables e Constantes  =======================>>>  */
const wrapper = document.querySelector(".wrapper");
//console.log(wrapper);
const banner = document.querySelector(".banner");
const header = document.querySelector(".header");
//console.log(header);
const main = document.querySelector(".main");
const sectionOne = document.querySelector(".section1");
const sectionTwo = document.querySelector(".section2");
const sectionThree = document.getElementById("sectionThree");
console.log(sectionThree);

//**  Animations with GSAP ============================>  */
//** = Variables = */
const bannerAdd = document.querySelector("#banner");
const headerOne = document.querySelector("#header");
const logo = document.querySelector("#logo");
const menuNew = document.querySelector("#menu");
const mainNew = document.querySelector("#main");
const leftThree = document.querySelector("#leftThree");
const leftCherry = document.querySelector("#leftCherry");
const rightOrange = document.querySelector("#rightOrange");
//**GSAP==> */
const tl = gsap.timeline({ ease: "power2.out" });

//**== Events == */
tl.fromTo(
  bannerAdd,
  { opacity: 0 },
  { opacity: 1, delay: 0.5, duration: 0.5 },
  " < "
);
tl.fromTo(
  headerOne,
  { y: "-200", opacity: 0 },
  { y: "0", opacity: 1, delay: 1, duration: 1 },
  " < "
);
tl.fromTo(
  ".menu__list",
  { y: "-100", opacity: 0 },
  { y: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
);
tl.fromTo(
  "#light",
  { y: "-100", opacity: 0 },
  { y: "0", opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
);
tl.fromTo(
  "#text",
  { y: "-400", opacity: 0 },
  { y: "0", opacity: 1, delay: 1, duration: 1 },
  " < "
);
tl.fromTo(
  "#arrow",
  { opacity: 0 },
  { opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
);
tl.fromTo(leftThree, { x: "-300" }, { x: "0", delay: 1, duration: 1 }, " < ");
tl.fromTo(
  leftCherry,
  { opacity: 0 },
  { opacity: 1, delay: 1.5, duration: 1.5 },
  " < "
);

tl.fromTo(
  rightOrange,
  { opacity: 0 },
  { opacity: 1, delay: 1, duration: 1 },
  " < "
);

//>Modo Oscuro =========================> =============== ====>
//** Modo Oscuro ======================== >>> */
const btnSwitch = document.getElementById("switch");
console.log(btnSwitch);

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  // Guardamos el modo en localstorage.
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.setItem("dark-mode", false);
  }
});
// Obtenemos el modo actual. ==> Regresar>
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}
//> Intersection Observer ===============> === =======================>
//* =============  Intersection Observer  ==================  *//
const rootObserver = {
  rootMargin: "-200px 0px 0px 0px",
};
const sectionObserverPlus = new IntersectionObserver(function (
  entries,
  sectionObserverPlus
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("scroller");
    } else {
      header.classList.remove("scroller");
    }
  });
},
rootObserver);

sectionObserverPlus.observe(sectionTwo);
/* sectionObserverPlus.observe(sectionThree); */
//> Animation ==>
/* const tl = gsap.timeline({ default: { ease: "power2.out" } });
tl.fromTo(
  ".animationTwo",
  { opacity: 0 },
  { opacity: 1, delay: 0.5, duration: 0.5 },
  " < "
); */
