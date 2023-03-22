const slideshow = document.querySelector(".slideshow");
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].getBoundingClientRect().width;

let index = 0,
  firstLast = false,
  intervalId;

const changeSlides = () => {
  intervalId = setInterval(() => {
    index === slides.length - 1 && (firstLast = true);
    index === 0 && (firstLast = false);
    console.log(index);

    firstLast ? index-- : index++;
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
  }, 2000);
};

changeSlides();

slideshow.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  console.log("Pause");
});

slideshow.addEventListener("mouseleave", () => {
  changeSlides();
  console.log("Play");
});

document.querySelector(".next").addEventListener("click", () => {
  index === slides.length - 1 && (index = -1);
  carousel.style.transform = `translateX(-${++index * slideWidth}px)`;
});

document.querySelector(".prev").addEventListener("click", () => {
  index === 0 && (index = slides.length);
  carousel.style.transform = `translateX(-${--index * slideWidth}px)`;
});
