let i = 0;
const name = "^1000 I'm Crehan Santhumayor";

document.querySelector("body").onload = () => {};

const animated = document.querySelector(".fadeInUp-animation");

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
  var typed = new Typed("#typing", {
    strings: [name],
    typeSpeed: 50,
    onComplete: () => {
      document.querySelector(".down-arrow").classList.toggle("black2gray");
    },
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log("hello");
}
