const loading = document.querySelector(".loading-animation");
const allDataDiv = document.querySelector(".container-data");

// Fetch The All Data
function fetchData(select) {
  fetch(
    `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${
      select ? select : 1
    }&limit=300`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(select);
      const allData = data;
      const items = allData.items; // Loop
      const pages = allData.pagination.pages; // Loop
      const pageSize = allData.pagination.pageSize;
      const endIndex = allData.pagination.endIndex;
      console.log(allData);
      loading.remove();
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("main-div");
      allDataDiv.innerHTML = "";
      allDataDiv.appendChild(mainDiv);
      createPages(items, mainDiv, pages, pageSize, endIndex);
      createTextHadeeth(items, mainDiv, endIndex);
    })
    .catch((error) => console.log(error));
}
fetchData();

// Create The Buttons And Select Box
function createPages(items, mainDiv, pages, pageSize, endIndex) {
  let page = 1;

  const textDiv = document.createElement("div"); // The Text Of Hadeeth
  textDiv.className =
    "text-container bg-[#4f4b29]/10 border border-[#4f4b29] border-solid rounded py-[30px] px-[20px] mb-5";
  mainDiv.appendChild(textDiv);

  const buttonsContainer = document.createElement("div"); // Button Container
  buttonsContainer.className =
    "buttons-container flex items-center justify-between";
  const buttonOne = document.createElement("button"); //Button One
  const buttonTwo = document.createElement("button"); //Button Two
  buttonOne.innerHTML = "التالي";
  buttonOne.className =
    "one bg-[#4f4b29]/30 w-20 py-[2px] rounded-md border border-[#4f4b29] border-solid";
  buttonsContainer.appendChild(buttonOne);
  buttonOne.dataset.number = page;
  if (page == pageSize) {
    buttonOne.classList.add("stop");
  } else {
    buttonOne.classList.remove("stop");
  }
  buttonOne.onclick = () => {
    page++;
    buttonOne.dataset.number = page;
    buttonTwo.dataset.number = page;
    if (page > 1) {
      if (buttonTwo.classList.contains("stop")) {
        buttonTwo.classList.remove("stop");
      } else if (page == pageSize) {
        buttonOne.classList.add("stop");
      }
    }
    createTextHadeeth(items, mainDiv, endIndex);
  };

  const select = document.createElement("select"); // Select Box
  select.classList =
    "select-page outline-none border border-[#4f4b29] border-solid bg-[#4f4b29]/10 rounded-md";
  select.innerHTML = "";
  pages.forEach((onePage) => {
    const option = document.createElement("option");
    option.dataset.number = onePage;
    option.innerHTML = `الصفحة ${onePage}`;
    select.appendChild(option);
  });
  buttonsContainer.appendChild(select);

  buttonTwo.innerHTML = "السابق";
  buttonTwo.dataset.number = page;
  buttonTwo.className =
    "two bg-[#4f4b29]/30 w-20 py-[2px] rounded-md border border-[#4f4b29] border-solid";
  if (page == 1) {
    buttonTwo.classList.add("stop");
  } else {
    buttonTwo.classList.remove("stop");
  }
  buttonTwo.onclick = () => {
    page--;
    buttonOne.dataset.number = page;
    buttonTwo.dataset.number = page;
    if (page < pageSize) {
      if (buttonOne.classList.contains("stop")) {
        buttonOne.classList.remove("stop");
      } else if (page == 1) {
        buttonTwo.classList.add("stop");
      }
    }
    createTextHadeeth(items, mainDiv, endIndex);
  };

  buttonsContainer.appendChild(buttonTwo);

  mainDiv.appendChild(buttonsContainer);
}

// Create The Text Hadeeth
function createTextHadeeth(items, mainDiv, endIndex) {
  const button = document.querySelector(".one");
  const theNumber = +button.dataset.number - 1;
  const textContainer = document.querySelector(".text-container");
  const dataWhatWeWant = items[theNumber];
  const numberHadeeth = dataWhatWeWant.number;
  const arab = dataWhatWeWant.arab;

  const h2Header = document.querySelector(".header-hadeeth");
  if (h2Header) {
    h2Header.remove();
  }

  const h2 = document.createElement("h2");
  h2.className =
    "header-hadeeth mb-6 w-fit mx-auto border-b border-[#4f4b29] border-solid";
  h2.innerHTML = `هذا حديث رقم ${numberHadeeth} من ${+endIndex + 1}`;
  mainDiv.prepend(h2);

  if (textContainer) {
    textContainer.innerHTML = "";
    const pText = document.createElement("p");
    pText.className = "leading-[2.5]";
    pText.innerHTML = arab;
    textContainer.appendChild(pText);
  }
  // console.log(items);
}

// Select On Change
document.addEventListener("change", (e) => {
  if (e.target.classList.contains("select-page")) {
    const valueString = e.target.value;
    const value = +valueString.split(" ")[1];
    fetchData(value);
  }
});
