const slides = document.getElementsByClassName('carousel-item')

let slidePosition = 0
const totalSlides = slides.length

console.log(totalSlides)

const prevBtn = document.getElementById('carousel-button-prev')
const nextBtn = document.getElementById('carousel-button-next')

prevBtn.addEventListener('click', moveToPrevSlide)
nextBtn.addEventListener('click', moveToNextSlide)

function moveToPrevSlide() {
  console.log('move to prev slide!')
}

function moveToNextSlide() {
  console.log('move to NEXT slide!')
}
