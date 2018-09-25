// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//show
function showSlides(n) {
  if (n > sourceImg.length) {slideIndex = 1}
  if (n < 1) {slideIndex = sourceImg.length}
  modalImg.style.display = "none";

  //gallery 태그의 compressed된 이미지 네임에서 -compressor를 제거하고 원본 이미지를 slideshow에 불러온다.
  var tempImgName = sourceImg[slideIndex-1].src;
  modalImg.src = tempImgName.replace("-compressor","");

  modalImg.style.display = "block";//여기서 animation이 작동해야 하는데 안된다 ㅡ.ㅡ
}
