// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//show
function showSlides(n) {
  if (n > sourceImg.length) {slideIndex = 1}
  if (n < 1) {slideIndex = sourceImg.length}
  modalImg.style.display = "none";
  modalImg.src=sourceImg[slideIndex-1].src;
  modalImg.style.display = "block";
}
