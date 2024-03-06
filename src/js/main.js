document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");

  // dodaje cień do nawigacji

  function addShadow() {
    if (window.scrollY >= 30) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }
  window.addEventListener("scroll", addShadow);


  // dodaje bieżacy rok do stopki

  const footerYear = document.querySelector(".footer__year");

  const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
  };

  handleCurrentYear();

  // wysuwa menu na małych ekranach

  const burgerBtn = document.querySelector(".nav__burger");
  const menu = document.querySelector(".nav__links");
  const allMenuBtns = document.querySelectorAll(".nav__link");

  const makeNavBarTransparent = () => {
    if (window.scrollY <= 30 && !menu.classList.contains("nav--active")) {
      nav.classList.remove("shadow-bg");
    }
  };

  const showMenu = () => {
    menu.classList.toggle("nav--active");
    nav.classList.add("shadow-bg");
    allMenuBtns.forEach((item) => {
      item.addEventListener("click", () => {
        menu.classList.remove("nav--active");
        makeNavBarTransparent();
      });
    });
    makeNavBarTransparent();
  };
  burgerBtn.addEventListener("click", showMenu);
});
