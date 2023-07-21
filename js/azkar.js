const loading = document.querySelector(".loading-animation");
const dataContainer = document.querySelector(".container-data");

function fetchData() {
  fetch(
    `https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const data = response;
      const keys = Object.keys(data); // The Keys Of The Objcet
      loading.remove();
      createAzkarUl(data, keys);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();

// Create The Ul And Li
function createAzkarUl(data, keys) {
  const ul = document.createElement("ul");
  ul.className = "ul-azkar flex justify-center items-center flex-wrap";
  keys.forEach((key) => {
    const li = document.createElement("li");
    li.className =
      "w-[222px] border border-solid border-[#4f4b29] rounded-md transition duration-3 hover:text-white hover:bg-[#4f4b29] py-2 px-[2px] text-[14px] m-2  cursor-pointer";
    li.dataset.azkarname = key;
    li.innerHTML = key;
    ul.appendChild(li);
  });
  dataContainer.appendChild(ul);
  loopOnLis(data, keys);
}

// Loop On Li And Data
function loopOnLis(data, keys) {
  const ulLi = document.querySelectorAll(".ul-azkar li");
  ulLi.forEach((li) => {
    li.onclick = () => {
      ulLi.forEach((li) => {
        li.classList.remove("active");
      });
      li.classList.add("active");
      const dataSet = li.dataset.azkarname;
      if (document.querySelector(".all-texts")) {
        document.querySelector(".all-texts").remove();
      }
      if (dataSet === "أذكار الصباح") {
        const dataWhatWeWant = data[dataSet];
        const firstData = dataWhatWeWant[0];
        const secondData = dataWhatWeWant.slice(1);
        const allData = [...firstData, ...secondData];
        createTheDivsAndTexts(allData, dataSet);
      } else {
        const dataWhatWeWant = data[dataSet];
        createTheDivsAndTexts(dataWhatWeWant, dataSet);
      }
    };
  });
}

// Create The Texts
function createTheDivsAndTexts(dataWhatWeWant, dataSet) {
  const allTexts = document.createElement("div");
  allTexts.className =
    "all-texts mt-[65px] border-t border-solid border-[#4f4b29] pt-5";
  const h2 = document.createElement("h2");
  h2.className = "mb-4";
  h2.innerHTML = dataSet;
  allTexts.appendChild(h2);
  const textDiv = document.createElement("div");
  textDiv.className = "text-div ";

  dataWhatWeWant.forEach((one) => {
    const category = one.category;
    if (category === dataSet) {
      const count =
        one.count == 1
          ? "مرة"
          : one.count == 2
          ? "مرتين"
          : one.count >= 3 && one.count <= 10
          ? `${one.count} مرات`
          : `${one.count} مرة`;
      const description = one.description;
      let content = one.content
        .split(" ")
        .filter((el) => el !== "\\n'," && el !== "'\\n'," && el !== "'")
        .join(" ");
      if (dataSet === "أدعية قرآنية" || dataSet === "أدعية الأنبياء") {
        content = content.split(" ").slice(0, -2);
        content.push("]");
        content = content.reduce((acc, curr) => `${acc} ${curr}`);
      }
      const divContainerZekr = document.createElement("div");
      divContainerZekr.className =
        "mb-6 border border-solid border-[#4f4b29] rounded-md p-3 bg-[#4f4b29]/10";
      const h3 = document.createElement("h3");
      h3.className = "text-[19px] leading-[2.5]";
      h3.innerHTML = `${content}<span class="inline-block w-[120px] bg-[#e8be6b] py-[3px] rounded-md text-base mr-[10px]">وتَقرأ ${count}</span>`;
      divContainerZekr.appendChild(h3);

      if (description) {
        const p = document.createElement("p");
        p.className =
          "mt-[35px] w-fit bg-[#4f4b29]/20 py-[6px] px-[7px] rounded-md";
        p.innerHTML = `الوصف: ${description}`;
        divContainerZekr.appendChild(p);
      }

      textDiv.appendChild(divContainerZekr);
    }
  });
  allTexts.appendChild(textDiv);
  dataContainer.appendChild(allTexts);
}
