
const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);


galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});


lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
