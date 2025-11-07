const hero = document.getElementById("heroImg");

const images = [
  "./assets/img/background1.jpg",
  "./assets/img/background2.jpg",
  "./assets/img/background.jpg",
];

let index = 0;
setInterval(() => {
  hero.style.transition = "all 1s ease-in-out";
  hero.style.backgroundImage = `url(${images[index]})`;
  setTimeout(() => {
    hero.style.transition = "";
  }, 1000);
  index = (index + 1) % images.length;
}, 15000);

export { hero };
