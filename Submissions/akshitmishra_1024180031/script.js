window.onload = () => {
  const slides = document.querySelectorAll(".slideshow img");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.style.opacity = idx === i ? "1" : "0";
    });
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  showSlide(index); 
};
