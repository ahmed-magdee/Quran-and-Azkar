const formContainer = document.querySelector(".form-container");
const mainForm = document.querySelector(".profile-form");
const inputUsername = document.querySelector(".username");
const inputAge = document.querySelector(".input-age");
const nameDiv = document.querySelector(".name-div");
const shouldWrite = document.querySelector(".should-write");
const inputImg = document.querySelector(".input-img");
const prayTime = document.querySelector(".pray-time");
const animation = document.querySelector(".loading-animation");
const fetchDataDiv = document.querySelector(".data-fetch");

// The Time And Date
const theData = new Date();
const theDay = theData.getDate(); //The Day
const theMonth = theData.getMonth() + 1; // Month
const theYear = theData.getFullYear(); // Year

// The P Should Write
shouldWrite.innerHTML = "* يرجي إدخال الإسم";

// Onchange Input UserName
inputUsername.onchange = (e) => {
  if (inputUsername.value !== "") {
    shouldWrite.innerHTML = "";
  } else {
    shouldWrite.innerHTML = "* يرجي إدخال الإسم";
  }
};

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

// The Input Image Handle
inputImg.onchange = () => {
  console.log(inputImg.value);
  let file = new FileReader();
  file.readAsDataURL(inputImg.files[0]);
  file.onload = () => {
    const dataStorage = JSON.parse(localStorage.getItem("profile-data"));
    if (dataStorage) {
      dataStorage.image = file.result;
      localStorage.setItem("profile-data", JSON.stringify(dataStorage));
    } else {
      theDataProfile.image = file.result;
      localStorage.setItem("profile-data", JSON.stringify(theDataProfile));
    }
  };
};

// Form Onsubmit
mainForm.onsubmit = (e) => {
  e.preventDefault();
  if (inputUsername.value !== "") {
    const dataStorage = JSON.parse(localStorage.getItem("profile-data"));
    if (dataStorage) {
      dataStorage.name = inputUsername.value;
      dataStorage.age = inputAge.value === "" ? "لم تكتبه" : inputAge.value;
      localStorage.setItem("profile-data", JSON.stringify(dataStorage));
    } else {
      theDataProfile.name = inputUsername.value;
      theDataProfile.age = inputAge.value === "" ? "لم تكتبه" : inputAge.value;
      localStorage.setItem("profile-data", JSON.stringify(theDataProfile));
    }
    createProfileDivs();
  }
};

// Create The Divs Data
function createProfileDivs() {
  let profileData = JSON.parse(localStorage.getItem("profile-data"));
  if (profileData) {
    if (profileData.name !== "") {
      formContainer.innerHTML = "";
      formContainer.classList.add("bg-[#4f4b29]/20");
      formContainer.classList.add("p-[20px]");
      formContainer.classList.add("rounded-xl");
      formContainer.classList.add("mx-auto");
      formContainer.classList.add("sm:w-[600px]");
      formContainer.classList.add("md-[700px]");
      formContainer.classList.add("border");
      formContainer.classList.add("border-solid");
      formContainer.classList.add("border-[#4f4b29]");

      const headerAddress = document.createElement("h1");
      headerAddress.className =
        "w-fit border-b border-[#4f4b29] mb-[30px] headerScreen:text-xl";
      headerAddress.innerHTML = "معلومات حسابك";
      formContainer.appendChild(headerAddress);

      const mainDiv = document.createElement("div"); // The Main Div Fot Data
      mainDiv.className = "main-div-data  text-[#4f4b29]";
      const h2Name = document.createElement("h2"); // The Name H2
      h2Name.className =
        "name-div flex items-center mb-[10px]  headerScreen:text-[18px]";
      h2Name.innerHTML = `الإسم: <p class="mr-[10px]">${profileData.name}</p>`;
      mainDiv.prepend(h2Name);

      const h2Age = document.createElement("h2"); // The Age H2
      h2Age.innerHTML = `السن: <p class="mr-[10px]">${profileData.age}</p>`;
      h2Age.className =
        "age-div flex items-center mb-[10px] headerScreen:text-[18px]";
      mainDiv.appendChild(h2Age);

      if (profileData.sorah.sorahName !== "" && profileData.sorah.aya !== "") {
        const h2Sorah = document.createElement("h2"); // H1 Sorah
        h2Sorah.className = "place-sorah cursor-pointer  headerScreen:text-xl";
        h2Sorah.title = "أضغط لمتابعة السورة";
        h2Sorah.innerHTML = `<p class= "inline-block ml-2">مكانك الحالي: </p>أنت تقف عند السورة <p class= "inline-block">${profileData.sorah.sorahName}</p> عند الآية <p class= "inline-block">${profileData.sorah.aya}</p>`;
        mainDiv.appendChild(h2Sorah);
        h2Sorah.onclick = createFetchData; //Onclick The H1 Sorah
      }

      const button = document.createElement("button"); // Logout Button
      button.className =
        "block border border-solid border-[#4f4b29] w-[140px] mx-auto mt-[30px] py-2 rounded transition-all duration-3 hover:bg-[#4f4b29] hover:text-white";
      button.innerHTML = "تسجيل الخروج";
      button.onclick = () => {
        localStorage.removeItem("profile-data");
        window.location.reload();
      };

      if (profileData.image !== "") {
        const imageDiv = document.createElement("div");
        imageDiv.classList = "top-0 left-0 absolute";
        imageDiv.innerHTML = `<img class="w-[60px] h-[60px] border-[5px] border-solid border-white rounded-[50%]" src= ${profileData.image} alt="profile-img"/>`;
        mainDiv.appendChild(imageDiv);
      }

      mainDiv.appendChild(button);
      formContainer.appendChild(mainDiv);
    }
  }
}
createProfileDivs();

// Fetch Data
function createFetchData() {
  const storageData = JSON.parse(localStorage.getItem("profile-data"));
  const ayaNumber = +storageData.sorah.aya;
  const sorahName = +storageData.sorah.sorahName;

  //Fetch The Data
  fetch(`https://api.alquran.cloud/v1/surah/${sorahName}`)
    .then((response) => {
      return response.json();
    })
    .then((fetching) => {
      const allData = fetching.data;
      createTheMainSorah(allData, sorahName, ayaNumber);
    });
}

function createTheMainSorah(allData, sorahName, ayaNumber) {
  const overflow = document.createElement("div");
  overflow.classList.add("overflow", "active");
  const name = allData.name;
  const number = allData.number;
  const numberOfAyahs = allData.numberOfAyahs;
  const ayahs = allData.ayahs; // Loop On All Ayahs

  const allTextAyahsContainer = document.createElement("div"); // All Ayahs Container
  const p = document.createElement("p");
  p.innerHTML = `<p class="leading-[2]">"يمكنك الضغط علي رقم الآية وحفظ المكان الذي توقفت فيه"</p>`;
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
    h2.innerHTML = `${text} <span data-number= ${numberInSurah} data-sorahname = ${sorahName} class="number-aya hover:text-red-900">{${numberInSurah}}</span>`;

    allTextAyahsContainer.appendChild(h2);
  });

  const button = document.createElement("button");
  button.className =
    "close-overflow sticky top-0 right-0 w-10 h-10 flex justify-center items-center bg-red-900 rounded-full text-2xl text-white ouline-none";
  button.innerHTML = "X";

  overflow.appendChild(button);
  overflow.appendChild(allTextAyahsContainer);
  button.onclick = () => {
    button.parentElement.remove();
  };
  document.body.appendChild(overflow);
  createScroll(sorahName, ayaNumber); // Create Scroll
}

// Create Scroll
function createScroll(sorahName, ayaNumber) {
  const allSpanNumbers = document.querySelectorAll(".number-aya");
  allSpanNumbers.forEach((span) => {
    const spanDatasetSorah = span.dataset.sorahname;
    const spanDatasetAya = span.dataset.number;
    if (
      sorahName == span.dataset.sorahname &&
      ayaNumber == span.dataset.number
    ) {
      span.classList.add("active");
      span.parentElement.classList.add("active");
      span.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    // console.log(span);
  });
}

// Document AddEventListener
document.addEventListener("click", (e) => {
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

    const allAyaDiv = document.querySelectorAll(".aya"); // Loop On Span Parent Element
    allAyaDiv.forEach((h2) => {
      h2.classList.remove("active");
    });
    e.target.parentElement.classList.add("active"); // Active Parent Element
    const theAya = +e.target.dataset.number;
    const theSorah = +e.target.dataset.sorahname;
    let dataStorage = JSON.parse(localStorage.getItem("profile-data"));
    if (dataStorage) {
      dataStorage.sorah.aya = theAya;
      dataStorage.sorah.sorahName = theSorah;
      localStorage.setItem("profile-data", JSON.stringify(dataStorage));
      document.querySelector(
        ".place-sorah"
      ).innerHTML = `<p class= "inline-block ml-2">مكانك الحالي: </p>أنت تقف عند السورة <p class= "inline-block">${dataStorage.sorah.sorahName}</p> عند الآية <p class= "inline-block">${dataStorage.sorah.aya}</p>`;
    }
    document.querySelector(".close-overflow").classList.add("stop");
    createPSaver(e.target);
  }
});

// Create Small PopUp To Save The Value Of Sorah
function createPSaver(span) {
  const overflow = document.querySelector(".overflow");
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

// ============================================================================ Fetch The Timing Pray
const rightLocation = [
  "الاسكندرية",
  "مطروح",
  "القاهرة",
  "بور_سعيد",
  "الغردقة",
  "اسوان",
];

// Fetch Data
function fetchDataPrayTime(loc = "الاسكندرية") {
  fetch(
    `https://api.aladhan.com/v1/timingsByCity/${theDay}-${theMonth}-${theYear}?city=${loc}&country=egypt`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      prayTime.className =
        "pray-time mt-20 py-[20px] rounded-xl mx-auto sm:w-[600px] md-[700px] border-t border-solid border-[#4f4b29]";
      const allData = response.data; // All Data
      const hijriDay = allData.date.hijri.day; // The Date
      const weekday = allData.date.hijri.weekday.ar; // The Day
      const month = allData.date.hijri.month.ar; // The Day
      const year = allData.date.hijri.year; // The Day
      const timings = allData.timings; // Loop On Data

      animation.remove();
      const headDiv = document.createElement("div"); // Heading Of The Timing
      headDiv.classList = "head-div";
      const h2Heading = document.createElement("h2"); // H2 Heading
      h2Heading.className = "text-center mb-2";
      h2Heading.innerHTML = `{ مواقيت الصلاة }`;
      headDiv.appendChild(h2Heading);
      const h2 = document.createElement("h2"); // The H2 Date
      h2.className = "text-center mb-6";
      h2.innerHTML = `${weekday} الموافق ${hijriDay}-${month}-${year} هـ`;
      headDiv.appendChild(h2);
      const p = document.createElement("p");
      p.classList = "mb-2";
      p.innerHTML = `هذه المواقيت طبقا لمحافظة <span class="span-location">${loc}</span>`;
      headDiv.appendChild(p);
      const divSelect = document.createElement("div");
      divSelect.classList = "mb-2";
      const pSelcet = document.createElement("p");
      pSelcet.classList = "inline-block ml-2";
      pSelcet.innerHTML = "أختر محافظتك الصحيحة";
      divSelect.appendChild(pSelcet); // The Right Location
      const selectLocation = document.createElement("select"); // Select The Real Location
      selectLocation.classList =
        "select-location outline-none border border-[#4f4b29] border-solid bg-[#4f4b29]/10 rounded-md";
      rightLocation.forEach((one) => {
        const option = document.createElement("option");
        option.innerHTML = one.split("_").join(" ");
        selectLocation.appendChild(option);
      });
      selectLocation.value = loc;
      divSelect.appendChild(selectLocation);
      headDiv.appendChild(divSelect);

      fetchDataDiv.appendChild(headDiv);
      createTheDivs(timings);
    });
}
fetchDataPrayTime();

// Create The Divs And Data Loop
function createTheDivs(timings) {
  const keys = Object.keys(timings); // Keys Of Object
  const divText = document.createElement("div"); // Div All Texts
  const ul = document.createElement("ul"); // Ul Li
  ul.className =
    "ul-timing flex items-center justify-center flex-wrap mt-[10px]";
  keys.forEach((key) => {
    let keyArabic =
      key == "Fajr"
        ? "الفجر"
        : key == "Sunrise"
        ? "الشروق"
        : key == "Dhuhr"
        ? "الظهر"
        : key == "Asr"
        ? "العصر"
        : key == "Sunset"
        ? "الغروب"
        : key == "Maghrib"
        ? "المغرب"
        : key == "Isha"
        ? "العشاء"
        : key == "Imsak"
        ? "الأمساك"
        : key == "Midnight"
        ? "منتصف الليل"
        : key == "Firstthird"
        ? "الثلث الأول"
        : "الثلث الأخير";
    const li = document.createElement("li");
    li.classList =
      "li-time border border-solid border-[#4f4b29] w-[145px] h-[120px] m-[10px] bg-[#cecdc6] text-2xl flex items-center justify-center flex-col rounded-md text-[#4f4b29]";
    li.dataset.type = key;
    li.appendChild(document.createTextNode(keyArabic));
    ul.appendChild(li);
  });
  divText.appendChild(ul);
  fetchDataDiv.appendChild(divText);
  putDataToLi(timings, keys);
}

function putDataToLi(timings) {
  const allLi = document.querySelectorAll(".li-time");
  allLi.forEach((li) => {
    const dataSet = li.dataset.type;
    const theRealTime =
      +timings[dataSet].slice(0, 2) >= 12
        ? `${+timings[dataSet].slice(0, 2) - 12}${timings[dataSet].slice(2)} Pm`
        : `${timings[dataSet]} Am`;
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(theRealTime));
    li.appendChild(p);
  });
}

// Change The Location Select Box
document.addEventListener("change", (e) => {
  if (e.target.classList.contains("select-location")) {
    document.querySelector(".head-div").remove();
    document.querySelector(".ul-timing").remove();
    e.target.classList.add("stop");
    const value = e.target.value;
    fetchDataPrayTime(value);
  }
});
