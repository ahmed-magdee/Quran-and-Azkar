const mainUl = document.querySelector(".main-ul");
const loadingDiv = document.querySelector(".loading-animation");
const overflow = document.querySelector(".overflow");

// All Sorahs Fetch
function allSorahsFetch() {
  return fetch("https://api.alquran.cloud/v1/surah").then((response) => {
    return response.json();
  });
}
const allData = allSorahsFetch(); // The Constans Of Fetching Sorahs

// Showing The Data Of Sorahs
function showingData() {
  allData
    .then((fetching) => {
      const allData = fetching.data;
      loadingDiv.remove();
      createTheDivs(allData);
    })
    .catch((error) => {
      console.log(error);
    });
}
showingData();

// Loop On The Data And Create The Information Divs
function createTheDivs(allData) {
  allData.forEach((one) => {
    const sorahNumber = one.number;
    const sorahName = one.name;
    const numberOfAyahs = one.numberOfAyahs;
    const revelationType = one.revelationType === "Meccan" ? "مكية" : "مدنية";

    const li = document.createElement("li");
    li.className =
      "sorah w-[190px] h-[170px] cursor-pointer transition-all duration-[.5s] hover:bg-[#4f4b29] hover:text-white hover:translate-y-[-10px] flex items-center justify-center border-[1px] border-[#4f4b29] flex-col rounded m-3 group shadow-[0px_1px_5px_0px_rgba(79,75,41,1)] hover:shadow-[0px_10px_5px_0px_rgba(79,75,41,1)] py-6";
    li.dataset.sorah = sorahNumber;
    li.dataset.sorahname = sorahName;
    li.innerHTML = `<h3 class="text-bold font-secondFont text-2xl mb-6 group-hover:text-white text-[#4f4b29] transition-all duration-[.5s]">${sorahName}</h3><p class="font-semibold mb-1">الرقم في المصحف <span>${sorahNumber}</span></p><p class="font-semibold mb-1">عدد الآيات <span>${numberOfAyahs}</span></p><p class="font-semibold  mb-1">وهي سورة <span>${revelationType}</span></p>`;
    mainUl.appendChild(li);

    li.onclick = () => {
      const allLi = document.querySelectorAll(".sorah");
      allLi.forEach((liSorah) => {
        liSorah.classList.add("stop");
      });
      const sorahWhatWeWant = +li.dataset.sorah;
      const sorahnameLi = li.dataset.sorahname;
      fetchDataSorahTafsir(sorahWhatWeWant, sorahnameLi);
    };
  });
}

// Fetch Data Tafsir Quran
function fetchDataSorahTafsir(sorahWhatWeWant, sorahnameLi) {
  fetch(
    `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${sorahWhatWeWant}`
  )
    .then((response) => response.json())
    .then((data) => {
      const allLi = document.querySelectorAll(".sorah");
      allLi.forEach((liSorah) => {
        liSorah.classList.remove("stop");
      });
      const tafsir = data.result;
      overflow.classList.add("active");
      const allTextAyahsContainer = document.createElement("div");

      const h1 = document.createElement("h1");
      h1.className =
        "mb-10 text-red-800 w-fit border-b-2 border-red-800 mx-auto";
      h1.innerHTML = `${sorahnameLi} <span>وعدد آياتها ${tafsir.length}</span>`;
      allTextAyahsContainer.appendChild(h1);

      const button = document.createElement("button");
      button.className =
        "sticky top-0 right-0 w-10 h-10 flex justify-center items-center bg-red-900 rounded-full text-2xl text-white ouline-none";
      button.innerHTML = "X";

      button.onclick = () => {
        overflow.innerHTML = "";
        overflow.classList.remove("active");
      };
      overflow.appendChild(button);

      tafsir.forEach((one) => {
        const ayaNumber = one.aya;
        const arabic_text = one.arabic_text;
        const translation = one.translation;

        createDataWithOverflow(
          allTextAyahsContainer,
          ayaNumber,
          arabic_text,
          translation
        );
      });
      overflow.appendChild(allTextAyahsContainer);
    });
}

function createDataWithOverflow(
  allTextAyahsContainer,
  ayaNumber,
  arabic_text,
  translation
) {
  const div = document.createElement("div"); // Create The Ayah And Its Number
  div.className =
    "aya font-mainFont font-normal border-b-[1px] border-red-800 mb-[30px] leading-[2.5] transition-all  py-5 px-2 rounded";
  div.innerHTML = `<h2>${arabic_text} <span class= "${ayaNumber} hover:text-red-900">{${ayaNumber}}</span></h2>`;

  const p = document.createElement("p");
  p.className = "aya-tafsir text-xl mt-4 text-red-700 leading-[2.5]";
  p.appendChild(document.createTextNode(translation));

  div.appendChild(p);
  allTextAyahsContainer.appendChild(div);
}
