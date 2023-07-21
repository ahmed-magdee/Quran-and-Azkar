const mainUl = document.querySelector(".main-ul");
const loadingDiv = document.querySelector(".loading-animation");
const overflow = document.querySelector(".overflow");

// The Object Of Data
let theDataProfile = {
  name: "",
  age: "",
  image: "",
  sorah: {
    sorahName: "",
    aya: "",
  },
};

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
    li.innerHTML = `<h3 class="text-bold font-secondFont text-2xl mb-6 group-hover:text-white text-[#4f4b29] transition-all duration-[.5s]">${sorahName}</h3><p class="font-semibold mb-1">الرقم في المصحف <span>${sorahNumber}</span></p><p class="font-semibold mb-1">عدد الآيات <span>${numberOfAyahs}</span></p><p class="font-semibold  mb-1">وهي سورة <span>${revelationType}</span></p>`;
    mainUl.appendChild(li);

    li.onclick = () => {
      const allLi = document.querySelectorAll(".sorah");
      allLi.forEach((liSorah) => {
        liSorah.classList.add("stop");
      });
      const sorahWhatWeWant = +li.dataset.sorah;
      fetchDataSorah(sorahWhatWeWant);
    };
  });
}

// Fetch Sorah Data
function fetchDataSorah(sorahWhatWeWant, ayahNumber = null) {
  fetch(`https://api.alquran.cloud/v1/surah/${sorahWhatWeWant}`)
    .then((response) => {
      return response.json();
    })
    .then((fetching) => {
      const allLi = document.querySelectorAll(".sorah");
      allLi.forEach((liSorah) => {
        if (liSorah.classList.contains("stop")) {
          liSorah.classList.remove("stop");
        }
      });
      const allData = fetching.data;
      createTheMainSorah(allData, sorahWhatWeWant);
    });
}

// Create The Divs Of Sorahs
function createTheMainSorah(allData, sorahWhatWeWant) {
  overflow.classList.add("active");
  const name = allData.name;
  const number = allData.number;
  const numberOfAyahs = allData.numberOfAyahs;
  const ayahs = allData.ayahs; // Loop On All Ayahs

  const allTextAyahsContainer = document.createElement("div"); // All Ayahs Container
  const p = document.createElement("p");
  p.innerHTML = `<p class= "mb-[20px]">"يمكنك الضغط علي الآية لنفسيرها"</p><p>"وبمكنك الضغط علي رقم الآية وحفظ المكان الذي توقفت فيه"</p>`;
  p.classList =
    "font-secondFont text-[#4f4b29] mb-8 bg-red-800 mx-auto rounded-[15px] py-[15px] text-xl text-white decoration-underline";
  allTextAyahsContainer.appendChild(p);
  const h1 = document.createElement("h1");
  h1.className = "mb-10 text-red-800 w-fit border-b-2 border-red-800 mx-auto";
  h1.innerHTML = `${name} <span>وعدد آياتها ${numberOfAyahs}</span>`;
  allTextAyahsContainer.appendChild(h1);

  ayahs.forEach((aya) => {
    const numberInSurah = aya.numberInSurah;
    const text = aya.text;

    const h2 = document.createElement("h2"); // Create The Ayah And Its Number
    h2.className =
      "aya font-mainFont font-normal border-b-[1px] border-red-800 mb-[30px] cursor-pointer leading-[2.5] transition-all duration-300 hover:bg-[#4f4b29]/40 hover:text-white py-5 px-2 rounded";
    h2.dataset.sorah = number;
    h2.dataset.aya = numberInSurah;
    h2.innerHTML = `${text} <span data-number= ${numberInSurah} data-sorahname = ${sorahWhatWeWant} class="number-aya hover:text-red-900">{${numberInSurah}}</span>`;

    allTextAyahsContainer.appendChild(h2);
  });

  const button = document.createElement("button");
  button.className =
    "close-overflow sticky top-0 right-0 w-10 h-10 flex justify-center items-center bg-red-900 rounded-full text-2xl text-white ouline-none";
  button.innerHTML = "X";

  button.onclick = () => {
    overflow.innerHTML = "";
    overflow.classList.remove("active");
  };
  overflow.appendChild(button);
  overflow.appendChild(allTextAyahsContainer);
}

overflow.onscroll = () => {
  console.log("yes");
};

// Document AddEventListener
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("aya")) {
    const allAyaH2 = document.querySelectorAll(".aya");
    allAyaH2.forEach((h2) => {
      h2.classList.add("stop");
    });
    const sorahH2 = +e.target.dataset.sorah;
    const ayaH2 = +e.target.dataset.aya;
    fetchTafsirData(sorahH2, ayaH2);
  }
  if (e.target.classList.contains("number-aya")) {
    //Span Aya Number
    if (document.querySelector(".p-saver")) {
      document.querySelector(".p-saver").remove();
    }
    const numberSpans = document.querySelectorAll(".number-aya");
    numberSpans.forEach((span) => {
      span.classList.remove("active");
      span.classList.add("stop");
    });
    e.target.classList.add("active");
    const theAya = +e.target.dataset.number;
    const theSorah = +e.target.dataset.sorahname;
    let dataStorage = JSON.parse(localStorage.getItem("profile-data"));
    if (dataStorage) {
      dataStorage.sorah.aya = theAya;
      dataStorage.sorah.sorahName = theSorah;
      localStorage.setItem("profile-data", JSON.stringify(dataStorage));
    } else {
      theDataProfile.sorah.aya = theAya;
      theDataProfile.sorah.sorahName = theSorah;
      localStorage.setItem("profile-data", JSON.stringify(theDataProfile));
    }
    document.querySelector(".close-overflow").classList.add("stop");
    createPSaver(e.target);
  }
});

// Tafsir Data Fetch
function fetchTafsirData(sorahH2, ayaH2) {
  fetch(
    `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${sorahH2}`
  )
    .then((response) => {
      return response.json();
    })
    .then((fetching) => {
      const allAyaH2 = document.querySelectorAll(".aya");
      const p = document.querySelectorAll(".aya-tafsir");
      p.forEach((one) => {
        one.remove();
      });
      allAyaH2.forEach((h2) => {
        if (h2.classList.contains("stop")) {
          h2.classList.remove("stop");
        }
      });
      // Data Constans
      const allData = fetching.result;
      const number = allData[ayaH2 - 1].aya;
      const arabic_text = allData[ayaH2 - 1].arabic_text;
      const translation = allData[ayaH2 - 1].translation;
      createTafsirToAya(ayaH2 - 1, number, arabic_text, translation);
    })
    .catch((error) => {
      console.log("Something Went Wrong");
    });
}

// Create Tafsir Aya
function createTafsirToAya(ayahH2, number, arabic_text, translation) {
  const allAyaH2 = document.querySelectorAll(".aya");
  allAyaH2.forEach((h2) => {
    const ayaNumber = +h2.dataset.aya;
    if (ayaNumber == number) {
      console.log(ayaNumber);
      console.log(number);
      const p = document.createElement("p");
      p.className = "aya-tafsir text-xl mt-4 text-red-700 leading-[2.5]";
      p.appendChild(document.createTextNode(translation));
      h2.appendChild(p);
    }
  });
}

// Create Small PopUp To Save The Value Of Sorah
function createPSaver(span) {
  const pSave = document.createElement("p");
  pSave.className =
    "p-saver sticky top-[50px] bg-[#4f4b29] text-white transition-all duration-300 w-[200px] h-[90px] rounded-md shadow-[0_4px_10px_0_#4f4b29] mx-auto flex items-center justify-center text-xl";
  pSave.innerHTML = "تم الحفظ !";
  overflow.prepend(pSave);
  let count;
  let removeP;
  if (document.querySelector(".p-saver")) {
    count = setInterval(() => {
      clearInterval(count);
      document.querySelector(".p-saver").classList.add("up-20");
    }, 1000);
    removeP = setInterval(() => {
      clearInterval(removeP);
      document.querySelector(".p-saver").remove();
      const numberSpans = document.querySelectorAll(".number-aya");
      numberSpans.forEach((span) => {
        span.classList.remove("stop");
      });
      document.querySelector(".close-overflow").classList.remove("stop");
    }, 1300);
  }
}
