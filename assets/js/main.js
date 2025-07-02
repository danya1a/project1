const navToggle = document.getElementById("nav-toggle"),
  navmenuChild = document.querySelector("#nav-toggle i"),
  navmenu = document.getElementById("nav-menu");
const footertop = document.querySelectorAll(".footer-top ul h5");
const connect = document.querySelector("#connect");
const footertopheight = document.querySelectorAll(".footer-top ul");
navToggle.addEventListener("click", () => {
  navmenu.classList.contains("show-content")
    ? navmenu.classList.remove("show-content")
    : navmenu.classList.add("show-content");
  navmenuChild.classList.contains("ri-menu-line")
    ? navmenuChild.classList.replace("ri-menu-line", "ri-menu-2-line")
    : navmenuChild.classList.replace("ri-menu-2-line", "ri-menu-line");
});
const bgHeader = () => {
  const header = document.getElementById("header");
  const navMenu = document.getElementById("nav-menu");
  navmenu.classList.remove("show-content");
  navmenuChild.classList.add("ri-menu-line");
  if (this.scrollY >= 50) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
};
window.addEventListener("scroll", bgHeader);

footertop.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < footertopheight.length; i++) {
      if (index != i) {
        footertopheight[i].classList.remove("height");
        footertop[i].style.setProperty("--boxRotate", "0deg");
      }
    }
    if (!footertopheight[index].classList.contains("height")) {
      footertop[index].style.setProperty("--boxRotate", "180deg");
    } else {
      footertop[index].style.setProperty("--boxRotate", "0deg");
    }
    footertopheight[index].classList.toggle("height");
  });
});
connect.addEventListener("click", () => {
  for (let i = 0; i < footertopheight.length; i++) {
    footertopheight[i].classList.remove("height");
    footertop[i].style.setProperty("--boxRotate", "0deg");
  }
});
let loading1 = document.querySelector(".loading");
function loading() {
  loading1.classList.add("none");
  document.querySelector("body").classList.remove("no-scroll");
}
window.onload = () => {
  setTimeout(loading, 3000);
};
