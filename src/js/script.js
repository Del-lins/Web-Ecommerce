let navHeader = false;

const navbar = document.querySelector(".header");
const menuButton = document.querySelector(".menu");
const closeHeader = document.querySelector(".close");

function toggleMenu() {
  if (!navHeader) {
    navbar.classList.add("open-menu");
    menuButton.style.display = "none";
    closeHeader.style.display = "inline";
    navHeader = true;
  } else {
    navbar.classList.remove("open-menu");
    menuButton.style.display = "inline";
    closeHeader.style.display = "none";
    navHeader = false;
  }
}

function handleResize() {
  if (window.innerWidth > 800) {
    navbar.classList.remove("open-menu");
    menuButton.style.display = "none";
    closeHeader.style.display = "none";
    navHeader = false;
  } else {
    navbar.classList.remove("open-menu");
    menuButton.style.display = "inline";
    closeHeader.style.display = "none";
    navHeader = false;
  }
}

menuButton.addEventListener("click", toggleMenu);
closeHeader.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
handleResize();
