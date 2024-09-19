const prayTime = document.querySelector(".pray-time");
const animation = document.querySelector(".loading-animation");
const fetchDataDiv = document.querySelector(".data-fetch");

// The Time And Date
const theData = new Date();
const theDay = theData.getDate(); //The Day
const theMonth = theData.getMonth() + 1; // Month
const theYear = theData.getFullYear(); // Year

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
        "pray-time py-[20px] rounded-xl mx-auto sm:w-[600px] md-[700px]";
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
        : key == "Lastthird" && "الثلث الأخير";
    if (keyArabic) {
      const li = document.createElement("li");
      li.classList =
        "li-time border border-solid border-[#4f4b29] w-[145px] h-[120px] m-[10px] bg-[#cecdc6] text-2xl flex items-center justify-center flex-col rounded-md text-[#4f4b29]";
      li.dataset.type = key;
      li.appendChild(document.createTextNode(keyArabic));
      ul.appendChild(li);
    }
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
        ? `${+timings[dataSet].slice(0, 2) - 12}${timings[dataSet].slice(2)} م`
        : `${timings[dataSet]} ص`;
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
