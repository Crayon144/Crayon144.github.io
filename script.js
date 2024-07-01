let i = 0;
const name = "^1000 I'm \n Crehan \n Santhumayor";
const animated = document.querySelector(".fadeInUp-animation");
let firstScroll = false;

const handleFirstScroll = (event) => {
  if (!firstScroll) {
    firstScroll = true;
  } else {
    const navbar = document.getElementById("navbar");
    const aTags = navbar.getElementsByTagName("a");
    for (var i = 0; i < aTags.length; i++) {
      aTags[i].style.color = "white";
    }
    document.removeEventListener("scroll", handleFirstScroll);
    const downArrowElement = document.querySelector(".down-arrow");
    downArrowElement.classList.toggle("black2gray");
    downArrowElement.classList.toggle("gray2black");
  }
};

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
  var typed = new Typed("#typing", {
    strings: [name],
    typeSpeed: 50,
    onComplete: () => {
      document.querySelector(".down-arrow").classList.toggle("black2gray");
      document.addEventListener("scroll", handleFirstScroll);
    },
  });
});
