const slides = document.getElementsByClassName('carousel-item')

let slidePosition = 0
const totalSlides = slides.length

const prevBtn = document.getElementById('carousel-button-prev')
const nextBtn = document.getElementById('carousel-button-next')

prevBtn.addEventListener('click', moveToPrevSlide)
nextBtn.addEventListener('click', moveToNextSlide)

function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove('carousel-item-visible')
    slide.classList.add('carousel-item-hidden')
  }
}

function moveToPrevSlide() {
  hideAllSlides()
  if (slidePosition === 0) {
    slidePosition = 2
  } else if (slidePosition <= totalSlides - 1) {
    slidePosition--
  }
  slides[slidePosition].classList.add('carousel-item-visible')
}

function moveToNextSlide() {
  hideAllSlides()
  if (slidePosition < totalSlides - 1) {
    slidePosition++
  } else if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  }

  slides[slidePosition].classList.add('carousel-item-visible')
}
