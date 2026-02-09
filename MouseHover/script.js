const mainImage = document.getElementById("mainImage");
const originalSrc = mainImage.src;

function showImage(element) {
  mainImage.src = element.src;
}

function resetImage() {
  mainImage.src = originalSrc;
}
