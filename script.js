let i = 0;
const name = "^1000 I'm \n Crehan \n Santhumayor";
const animated = document.querySelector(".fadeInUp-animation");
let firstScroll = false;

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).

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
