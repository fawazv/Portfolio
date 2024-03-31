const navBtn = document.querySelector(".nav__btn");
const navLink = document.querySelector(".nav__left");

navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navLink.classList.toggle("active");
});
