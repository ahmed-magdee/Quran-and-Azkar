const icon = document.querySelector(".icon");
const lists = document.querySelector(".list");
const nav = document.querySelector(".nav");
const scrollToTop = document.querySelector(".scroll-to-top");

icon.onclick = (e) => {
  e.stopPropagation();
  icon.classList.toggle("active");
  lists.classList.toggle("active");
  nav.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (e.target !== icon) {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      lists.classList.remove("active");
      nav.classList.remove("active");
    }
  }
});

window.onscroll = () => {
  if (window.scrollY >= 200) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
};

scrollToTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
