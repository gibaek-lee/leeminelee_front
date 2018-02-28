// Get the image and insert it inside the modal - use its "alt" text as a caption
function modalFunction(imgNum){
  modal.style.display = "block";
  modalImg.style.display = "block";//hhhh
  modalImg.src = sourceImg[imgNum-1].src;
  //captionText.innerHTML = sourceImg[imgNum-1].alt;
  slideIndex=imgNum;//slideshow가 현재 클릭한 이미지 다음으로 넘어갈 수 있도록 초기화
}

// When the user clicks on <span> (x), close the modal
function closeFunction() {
  modal.style.display = "none";
  modalImg.style.display = "none";//hhhh
}
