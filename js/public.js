const scrollToTop = document.querySelector(".scroll-to-top");

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
