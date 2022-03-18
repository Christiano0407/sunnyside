//> cONST =====>
const wrapper = document.querySelector(".wrapper");
//console.log(wrapper);
const banner = document.querySelector(".banner");
const header = document.querySelector(".header");
//console.log(header);
const main = document.querySelector(".main");
const sectionOne = document.querySelector(".section1");
const sectionTwo = document.querySelector(".section2");
//>Modo Oscuro =========================>>
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

//> Intersection Observer ===============> ===>

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
//> Animation ==>
