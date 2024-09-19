const icon = document.querySelector(".icon i");
const nav = document.querySelector(".nav");
const headerUl = document.querySelector("ul.list");

const headerData = [
  {
    name: "الصفحة الرئيسية",
    link: `${window.location.origin}/index.html`,
    page: "/index.html",
  },
  {
    name: "القرآن الكريم",
    link: `${window.location.origin}/html/choose-quran.html`,
  },
  {
    name: "التفسير الميسر",
    link: `${window.location.origin}/html/tafsir.html`,
  },
  {
    name: "الحديث الشريف",
    link: `${window.location.origin}/html/hadeeth.html`,
  },
  {
    name: "الأذكار",
    link: `${window.location.origin}/html/azkar.html`,
  },
  {
    name: "توقيت الصلاة",
    link: `${window.location.origin}/html/prayer-time.html`,
  },
];

function createLisAndLinks() {
  const pathname = window.location.pathname;
  headerData.forEach((link) => {
    console.log(link.link);
    const li = document.createElement("li");
    li.className = `li-link ${
      pathname.includes(link.page || link.link) && "active"
    }`;
    const a = document.createElement("a");
    a.className = "block";
    a.href = link.link;
    a.appendChild(document.createTextNode(link.name));
    li.appendChild(a);
    headerUl.appendChild(li);
  });
}
createLisAndLinks();

icon.onclick = (e) => {
  e.stopPropagation();
  icon.classList.toggle("active");
  headerUl.classList.toggle("active");
  nav.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (e.target !== icon) {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      headerUl.classList.remove("active");
      nav.classList.remove("active");
    }
  }
});
