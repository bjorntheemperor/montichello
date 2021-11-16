document.addEventListener('DOMContentLoaded', () => {

const shadow = document.querySelector(".wedo__img__shadow");
const shadowLower = document.querySelector(".wedo__img__shadow.lower");
const header = document.querySelector(".header");
const headerInner = document.querySelector(".header__inner");
const navs = document.querySelectorAll(".nav__item")



const headerCheck = () => {
  if (window.pageYOffset >= wedoHeight) {
    header.classList.add("fixed");
    headerInner.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    headerInner.classList.remove("fixed");
  }
}

window.addEventListener("scroll", () => {
  // initializing heights of sections every time we scroll
  const wedoHeight = document.querySelector(".section__wedo").getBoundingClientRect().top
  const newsHeight = document.querySelector(".section__news").getBoundingClientRect().top
  const galleryHeight = document.querySelector(".section__gallery").getBoundingClientRect().top
  const mapHeight = document.querySelector(".section__map").getBoundingClientRect().top

  // checking if header is fixed or not
  if (wedoHeight <= 0) {
    header.classList.add("fixed");
    headerInner.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    headerInner.classList.remove("fixed");
  }

// Huge IF block just to make sure header dots are working properly
    if (newsHeight>0) {
      navs[0].classList.add("active");
      navs[1].classList.remove("active");
      navs[2].classList.remove("active");
      navs[3].classList.remove("active");


    }
    if (wedoHeight>0) {
      header.classList.remove("wedo");
      header.classList.remove("news");
      header.classList.remove("gallery");
      header.classList.remove("map");
    }

    if (wedoHeight <= 0) {
      header.classList.add("wedo");
      header.classList.remove("news");
      header.classList.remove("gallery");
      header.classList.remove("map");
    }

    if (newsHeight <= 0) {
      navs[0].classList.remove("active");
      navs[1].classList.add("active");
      navs[2].classList.remove("active");
      navs[3].classList.remove("active");

      header.classList.remove("wedo");
      header.classList.add("news");
      header.classList.remove("gallery");
      header.classList.remove("map");

    }

    if (galleryHeight <= 0) {
      navs[0].classList.remove("active");
      navs[1].classList.remove("active");
      navs[2].classList.add("active");
      navs[3].classList.remove("active");

      header.classList.remove("wedo");
      header.classList.remove("news");
      header.classList.add("gallery");
      header.classList.remove("map");
    }

    if (mapHeight <= 0) {
      navs[0].classList.remove("active");
      navs[1].classList.remove("active");
      navs[2].classList.remove("active");
      navs[3].classList.add("active");

      header.classList.remove("wedo");
      header.classList.remove("news");
      header.classList.remove("gallery");
      header.classList.add("map");
    }

  // blue shadow moving
  if (window.pageYOffset > 760) {
    shadow.style.top = shadow.style.top+400+"px"
    shadow.style.left = "-260px"
    // purple shadow moving
    if (window.pageYOffset > 1300){
     shadowLower.style.top = shadowLower.style.top-110+"px"
     shadowLower.style.left = "260px"
   }
  }

})
// Слайдер
const leftButton = document.querySelector(".news__slider__button__left");
const rightButton = document.querySelector(".news__slider__button__right");
const sliderItem = document.querySelectorAll(".news__slider__item");
const track = document.querySelector(".news__slider__track");
const dot = document.querySelectorAll(".news__dot");

let position = 0;

let gap = sliderItem[0].clientWidth + 30

let currentDot = 1

leftButton.addEventListener("click", () => {
  position += gap

  if (position <= 400) {
    setPosition()
    dotMovingLeft()
  } else {
    position -= gap
  }

})

rightButton.addEventListener("click", () => {
  position -= gap

  if (position >= -1200) {
    setPosition()
    dotMovingRight()
  } else {
    position += gap
  }
})


const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
}

const dotMovingLeft = () => {

    dot[currentDot-1].classList.toggle('active')
    dot[currentDot].classList.remove('active')
    currentDot -= 1
}

const dotMovingRight = () => {

    dot[currentDot+1].classList.toggle('active')
    dot[currentDot].classList.remove('active')
    currentDot += 1
}
// Конец Слайдера


// При нажатии на точку в сайдбаре - переносимся на соответствующую секцию
  const anchors = document.querySelectorAll("[data-scroll]")

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('data-scroll')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    })
  }


});
