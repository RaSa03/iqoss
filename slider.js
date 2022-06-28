let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  const imgSlides = document.getElementsByClassName("slider-image");
  const textSlides = document.getElementsByClassName("slider-text");
  const buttonSlider = document.getElementsByClassName("slider-button");
  if (n > textSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = textSlides.length;
  }
  for (i = 0; i < textSlides.length; i++) {
    textSlides[i].style.display = "none";
    imgSlides[i].style.display = "none";
    buttonSlider[i].style.display = "none";
  }
  textSlides[slideIndex - 1].style.display = "block";
  imgSlides[slideIndex - 1].style.display = "block";
  buttonSlider[slideIndex - 1].style.display = "block";
}
