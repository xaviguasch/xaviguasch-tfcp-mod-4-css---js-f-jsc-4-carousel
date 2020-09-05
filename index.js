const slides = document.getElementsByClassName('carousel-item')

let slidePosition = 0
const totalSlides = slides.length

const prevBtn = document.getElementById('carousel-button-prev')
const nextBtn = document.getElementById('carousel-button-next')

prevBtn.addEventListener('click', moveToPrevSlide)
nextBtn.addEventListener('click', moveToNextSlide)

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = 2
    slides[0].classList.remove('carousel-item-visible')
    slides[slidePosition].classList.add('carousel-item-visible')
  } else if (slidePosition <= totalSlides - 1) {
    slidePosition--
    slides[slidePosition + 1].classList.remove('carousel-item-visible')
    slides[slidePosition].classList.add('carousel-item-visible')
  }
}

function moveToNextSlide() {
  if (slidePosition < totalSlides - 1) {
    slidePosition++
    slides[slidePosition - 1].classList.remove('carousel-item-visible')
    slides[slidePosition].classList.add('carousel-item-visible')
  } else if (slidePosition === totalSlides - 1) {
    slidePosition = 0
    slides[totalSlides - 1].classList.remove('carousel-item-visible')
    slides[slidePosition].classList.add('carousel-item-visible')
  }
}
