"use strict";

function openMenu() {
  function hideElement(element) {
    element.classList.add("hidden");
  }

  function showElement(element) {
    element.classList.remove("hidden");
  }

  const menu = document.getElementById("menu");
  const openMenuButton = document.getElementById("menu-open-button");
  const closeMenuButton = document.getElementById("close-menu-button");
  const hireUs = document.getElementById("hire-us");

  const menuNavChildren = document.getElementById("menu__nav").childNodes;

  const pageBody = document.body;

  function closeMenu() {
    hideElement(closeMenuButton);
    showElement(openMenuButton);

    hideElement(menu);
    pageBody.classList.remove("page__body--with_menu");
  }

  function addEventListenerCloseMenuOnClick(element) {
    element.addEventListener("click", () => {
      closeMenu();
    });
  }

  hideElement(closeMenuButton);
  hideElement(menu);

  openMenuButton.addEventListener("click", () => {
    hideElement(openMenuButton);
    showElement(closeMenuButton);

    showElement(menu);
    pageBody.classList.add("page__body--with_menu");
  });

  addEventListenerCloseMenuOnClick(closeMenuButton);

  addEventListenerCloseMenuOnClick(hireUs);

  for (const element of [...menuNavChildren]) {
    addEventListenerCloseMenuOnClick(element);
  }
}

function createSlider() {
  const slidesAmount = 3;

  let currentSlideIndex = 0;

  const sliderSlides = document.querySelector(".slider__slides");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");

  function appendSlide(prevSlideIndex, newSlideIndex) {
    sliderSlides.children[prevSlideIndex].classList.remove(
      "slider__slide--shown"
    );
    sliderSlides.children[newSlideIndex].classList.add("slider__slide--shown");
  }

  function handleRightArrowClick() {
    const prevSlideIndex = currentSlideIndex;

    if (++currentSlideIndex > slidesAmount - 1) {
      currentSlideIndex = 0;
    }

    appendSlide(prevSlideIndex, currentSlideIndex);
  }

  setTimeout(handleRightArrowClick, 3000);

  function createSliderInterval() {
    return setInterval(handleRightArrowClick, 10000);
  }

  let interval = createSliderInterval();

  function resetInterval() {
    clearInterval(interval);

    interval = createSliderInterval();
  }

  arrowLeft.addEventListener("click", () => {
    const prevSlideIndex = currentSlideIndex;

    if (--currentSlideIndex < 0) {
      currentSlideIndex = slidesAmount - 1;
    }

    appendSlide(prevSlideIndex, currentSlideIndex);

    resetInterval();
  });

  arrowRight.addEventListener("click", () => {
    handleRightArrowClick();

    resetInterval();
  });
}

function handleContactUsFormSubmit() {
  const form = document.getElementById("contact-us-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });
}

window.addEventListener("load", function () {
  openMenu();
  createSlider();
  handleContactUsFormSubmit();
});
