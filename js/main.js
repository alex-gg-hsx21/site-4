// const menuBtn = document.querySelector(".menu__btn");
// const menuclose = document.querySelector(".menu_close");
// const menulist = document.querySelector(".menu__list");

// menuBtn.addEventListener("click", () => {
//   menulist.classlist.add("menu__list-open");
// });
// menuclose.addEventListener("click", () => {
//   menulist.classlist.remove("menu__list-open");
// });
// Найти элементы
const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuCloseBtn = document.querySelector(".menu__close-btn");

// Функция для открытия меню
function openMenu() {
  menuList.classList.toggle("menu__list--open");
  menuShadow.classList.toggle("menu--open");
}

// Функция для закрытия меню
function closeMenu() {
  menuList.classList.remove("menu__list--open");
}

// Назначить обработчики событий
menuBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu__btn");
  const menuCloseBtn = document.querySelector(".menu__close-btn");
  const menuList = document.querySelector(".menu__list");
  const menuOverlay = document.querySelector(".menu--close");

  // Открыть меню
  menuBtn.addEventListener("click", () => {
    menuList.classList.add("menu__list--open");
    menuOverlay.classList.add("menu--open");
  });

  // Закрыть меню
  menuCloseBtn.addEventListener("click", () => {
    menuList.classList.remove("menu__list--open");
    menuOverlay.classList.remove("menu--open");
  });

  // Закрыть меню при клике на затемнённый фон
  menuOverlay.addEventListener("click", () => {
    menuList.classList.remove("menu__list--open");
    menuOverlay.classList.remove("menu--open");
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const menuBtn = document.querySelector(".menu__btn");
//   const menuCloseBtn = document.querySelector(".menu__close-btn");
//   const menuList = document.querySelector(".menu__list");
//   const menuOverlay = document.querySelector(".menu--close");

//   const toggleMenu = () => {
//     menuList.classList.toggle("menu__list--open");
//     menuOverlay.classList.toggle("menu--open");
//   };

//   // Открыть/закрыть меню при клике на кнопку
//   menuBtn.addEventListener("click", toggleMenu);

//   // Закрыть меню при клике на кнопку закрытия
//   menuCloseBtn.addEventListener("click", toggleMenu);

//   // Закрыть меню при клике на затемнённый фон
//   menuOverlay.addEventListener("click", toggleMenu);
// });
