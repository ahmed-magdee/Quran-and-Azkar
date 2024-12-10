const container = document.querySelector(".content-data .container");
const audioElement = document.createElement("audio");
audioElement.className = "appearance-none";
audioElement.type = "mp3/mpeg";
let timerInterval;
let interval500;
// audioElement.className = "audio-element appearance-none"

const shiekh = [
  {
    name: "إبراهيم الأخضر",
    img: "../imgs/shiekh/akdr.png",
  },
  {
    name: "أكرم العلاقمي",
    img: "../imgs/shiekh/akrm.png",
  },
  {
    name: "ماجد العنزي",
    img: "../imgs/shiekh/majd_onazi.png",
  },
  {
    name: "مالك شيبة الحمد",
    img: "../imgs/shiekh/shaibat.png",
  },
  {
    name: "ماهر المعيقلي",
    img: "../imgs/shiekh/maher.png",
  },
  {
    name: "محمد البراك",
    img: "../imgs/shiekh/braak.png",
  },
  {
    name: "محمد الطبلاوي",
    img: "../imgs/shiekh/tblawi.png",
  },
  {
    name: "محمد اللحيدان",
    img: "../imgs/shiekh/lhdan.png",
  },
  {
    name: "محمد المحيسني",
    img: "../imgs/shiekh/mhsny.png",
  },
  {
    name: "محمد أيوب",
    img: "../imgs/shiekh/ayyub.png",
  },
  {
    name: "محمد صالح عالم شاه",
    img: "../imgs/shiekh/shah.png",
  },
  {
    name: "محمد جبريل",
    img: "../imgs/shiekh/jbrl.png",
  },
  {
    name: "محمد صديق المنشاوي",
    img: "../imgs/shiekh/minsh.png",
  },
  {
    name: "محمد عبدالكريم",
    img: "../imgs/shiekh/m_krm.png",
  },
  {
    name: "محمود خليل الحصري",
    img: "../imgs/shiekh/husr.png",
  },
  {
    name: "إدريس أبكر",
    img: "../imgs/shiekh/abkr.png",
  },
  {
    name: "محمود علي البنا",
    img: "../imgs/shiekh/bna.png",
  },
  {
    name: "مشاري العفاسي",
    img: "../imgs/shiekh/afs.png",
  },
  {
    name: "مصطفى إسماعيل",
    img: "../imgs/shiekh/mustafa.png",
  },
  {
    name: "مصطفى اللاهوني",
    img: "../imgs/shiekh/lahoni.png",
  },
  {
    name: "مصطفى رعد العزاوي",
    img: "../imgs/shiekh/ra3ad.png",
  },
  {
    name: "معمر الأندونيسي",
    img: "../imgs/shiekh/muamr.png",
  },
  {
    name: "مفتاح السلطني",
    img: "../imgs/shiekh/muftah.png",
  },
  {
    name: "الزين محمد أحمد",
    img: "../imgs/shiekh/alzain.png",
  },
  {
    name: "عبدالرحمن السويّد",
    img: "../imgs/shiekh/a_swaiyd.png",
  },
  {
    name: "عبدالإله بن عون",
    img: "../imgs/shiekh/a_binaoun.png",
  },
  {
    name: "أحمد طالب بن حميد",
    img: "../imgs/shiekh/a_binhameed.png",
  },
  {
    name: "ماجد الزامل",
    img: "../imgs/shiekh/zaml.png",
  },
  {
    name: "ماهر شخاشيرو",
    img: "../imgs/shiekh/shaksh.png",
  },
  {
    name: "العشري عمران",
    img: "../imgs/shiekh/omran.png",
  },
  {
    name: "محمد المنشد",
    img: "../imgs/shiekh/monshed.png",
  },
  {
    name: "ياسر سلامة",
    img: "../imgs/shiekh/salamah.png",
  },
  {
    name: "أخيل عبدالحي روا",
    img: "../imgs/shiekh/akil.png",
  },
  {
    name: "أستاذ زامري",
    img: "../imgs/shiekh/zamri.png",
  },
  {
    name: "خالد المهنا",
    img: "../imgs/shiekh/mohna.png",
  },
  {
    name: "عادل الكلباني",
    img: "../imgs/shiekh/a_klb.png",
  },
  {
    name: "موسى بلال",
    img: "../imgs/shiekh/bilal.png",
  },
  {
    name: "حسين آل الشيخ",
    img: "../imgs/shiekh/alshaik.png",
  },
  {
    name: "حاتم فريد الواعر",
    img: "../imgs/shiekh/hatem.png",
  },
  {
    name: "إبراهيم الجرمي",
    img: "../imgs/shiekh/jormy.png",
  },
  {
    name: "محمود الرفاعي",
    img: "../imgs/shiekh/mrifai.png",
  },
  {
    name: "ناصر العبيد",
    img: "../imgs/shiekh/obaid.png",
  },
  {
    name: "واصل المذن",
    img: "../imgs/shiekh/wasel.png",
  },
  {
    name: "توفيق الصايغ",
    img: "../imgs/shiekh/twfeeq.png",
  },
  {
    name: "إبراهيم الدوسري",
    img: "../imgs/shiekh/ibrahim_dosri.png",
  },
  {
    name: "جمال شاكر عبدالله",
    img: "../imgs/shiekh/jamal.png",
  },
  {
    name: "جمعان العصيمي",
    img: "../imgs/shiekh/jaman.png",
  },
  {
    name: "رضية عبدالرحمن",
    img: "../imgs/shiekh/taher.png",
  },
  {
    name: "رقية سولونق",
    img: "../imgs/shiekh/rokaia.png",
  },
  {
    name: "سابينة مامات",
    img: "../imgs/shiekh/mamat.png",
  },
  {
    name: "سيدين عبدالرحمن",
    img: "../imgs/shiekh/sideen.png",
  },
  {
    name: "عبدالغني عبدالله",
    img: "../imgs/shiekh/abdulgani.png",
  },
  {
    name: "عبدالله فهمي",
    img: "../imgs/shiekh/fhmi.png",
  },
  {
    name: "حمد الدغريري",
    img: "../imgs/shiekh/hamad.png",
  },
  {
    name: "يوسف بن نوح أحمد",
    img: "../imgs/shiekh/noah.png",
  },
  {
    name: "جمال الدين الزيلعي",
    img: "../imgs/shiekh/zilaie.png",
  },
  {
    name: "معيض الحارثي",
    img: "../imgs/shiekh/harthi.png",
  },
  {
    name: "محمد رشاد الشريف",
    img: "../imgs/shiekh/rashad.png",
  },
  {
    name: "إبراهيم الجبرين",
    img: "../imgs/shiekh/jbreen.png",
  },
  {
    name: "خالد الجليل",
    img: "../imgs/shiekh/jleel.png",
  },
  {
    name: "أحمد الطرابلسي",
    img: "../imgs/shiekh/trabulsi.png",
  },
  {
    name: "عبدالله الكندري",
    img: "../imgs/shiekh/Abdullahk.png",
  },
  {
    name: "أحمد عامر",
    img: "../imgs/shiekh/Aamer.png",
  },
  {
    name: "إبراهيم السعدان",
    img: "../imgs/shiekh/IbrahemSadan.png",
  },
  {
    name: "أحمد الحذيفي",
    img: "../imgs/shiekh/ahmad_huth.png",
  },
  {
    name: "محمد عثمان خان",
    img: "../imgs/shiekh/khan.png",
  },
  {
    name: "يوسف الدغوش",
    img: "../imgs/shiekh/dgsh.png",
  },
  {
    name: "وشيار حيدر اربيلي",
    img: "../imgs/shiekh/wishear.png",
  },
  {
    name: "خالد القحطاني",
    img: "../imgs/shiekh/qht.png",
  },
  {
    name: "محمد برهجي",
    img: "../imgs/shiekh/M_Burhaji.png",
  },
  {
    name: "عثمان الأنصاري",
    img: "../imgs/shiekh/Othmn.png",
  },
  {
    name: "بندر بليله",
    img: "../imgs/shiekh/balilah.png",
  },
  {
    name: "خالد الشريمي",
    img: "../imgs/shiekh/shoraimy.png",
  },
  {
    name: "وديع اليمني",
    img: "../imgs/shiekh/wdee3.png",
  },
  {
    name: "خالد عبدالكافي",
    img: "../imgs/shiekh/kafi.png",
  },
  {
    name: "رعد محمد الكردي",
    img: "../imgs/shiekh/kurdi.png",
  },
  {
    name: "عبدالرحمن العوسي",
    img: "../imgs/shiekh/aloosi.png",
  },
  {
    name: "خالد الغامدي",
    img: "../imgs/shiekh/ghamdi.png",
  },
  {
    name: "رمضان شكور",
    img: "../imgs/shiekh/shakoor.png",
  },
  {
    name: "عبدالمجيد الأركاني",
    img: "../imgs/shiekh/m_arkani.png",
  },
  {
    name: "محمد خليل القارئ",
    img: "../imgs/shiekh/m_qari.png",
  },
  {
    name: "خالد الوهيبي",
    img: "../imgs/shiekh/whabi.png",
  },
  {
    name: "هزاع البلوشي",
    img: "../imgs/shiekh/hazza.png",
  },
  {
    name: "عبدالرحمن الماجد",
    img: "../imgs/shiekh/a_majed.png",
  },
  {
    name: "خليفة الطنيجي",
    img: "../imgs/shiekh/tnjy.png",
  },
  {
    name: "سلمان العتيبي",
    img: "../imgs/shiekh/salman.png",
  },
  {
    name: "محمد رفعت",
    img: "../imgs/shiekh/refat.png",
  },
  {
    name: "عبدالله الموسى",
    img: "../imgs/shiekh/mousa.png",
  },
  {
    name: "عبدالله الخلف",
    img: "../imgs/shiekh/khalf.png",
  },
  {
    name: "منصور السالمي",
    img: "../imgs/shiekh/mansor.png",
  },
  {
    name: "صلاح مصلي",
    img: "../imgs/shiekh/musali.png",
  },
  {
    name: "ناصر العصفور",
    img: "../imgs/shiekh/alosfor.png",
  },
  {
    name: "محمد البخيت",
    img: "../imgs/shiekh/bukheet.png",
  },
  {
    name: "إسلام صبحي",
    img: "../imgs/shiekh/islam.png",
  },
  {
    name: "بدر التركي",
    img: "../imgs/shiekh/bader.png",
  },
  {
    name: "هيثم الجدعاني",
    img: "../imgs/shiekh/hitham.png",
  },
  {
    name: "أحمد خليل شاهين",
    img: "../imgs/shiekh/shaheen.png",
  },
  {
    name: "سعد المقرن",
    img: "../imgs/shiekh/saad.png",
  },
  {
    name: "أحمد النفيس",
    img: "../imgs/shiekh/nufais.png",
  },
  {
    name: "عمر الدريويز",
    img: "../imgs/shiekh/darweez.png",
  },
  {
    name: "عبدالعزيز العسيري",
    img: "../imgs/shiekh/abdulazizasiri.png",
  },
  {
    name: "أحمد ديبان",
    img: "../imgs/shiekh/deban.png",
  },
  {
    name: "عبدالله كامل",
    img: "../imgs/shiekh/kamel.png",
  },
  {
    name: "عبدالرحمن الشحات",
    img: "../imgs/shiekh/a_alshahhat.png",
  },
  {
    name: "سعد الغامدي",
    img: "../imgs/shiekh/s_gmd.png",
  },
  {
    name: "سعود الشريم",
    img: "../imgs/shiekh/shur.png",
  },
  {
    name: "شيخ أبو بكر الشاطري",
    img: "../imgs/shiekh/shatri.png",
  },
  {
    name: "أحمد بن علي العجمي",
    img: "../imgs/shiekh/ajm.png",
  },
  {
    name: "عبدالباسط عبدالصمد",
    img: "../imgs/shiekh/basit.png",
  },
  {
    name: "عبدالرحمن السديس",
    img: "../imgs/shiekh/sds.png",
  },
  {
    name: "فارس عباد",
    img: "../imgs/shiekh/frs_a.png",
  },
  {
    name: "ناصر القطامي",
    img: "../imgs/shiekh/qtm.png",
  },
  {
    name: "ياسر الدوسري",
    img: "../imgs/shiekh/yasser.png",
  },
];
shiekh.sort((a, b) => a.name.localeCompare(b.name));

const sorahsName = [
  {
    id: 1,
    name: "الفاتحة",
  },
  {
    id: 2,
    name: "البقرة",
  },
  {
    id: 3,
    name: "آل عمران",
  },
  {
    id: 4,
    name: "النساء",
  },
  {
    id: 5,
    name: "المائدة",
  },
  {
    id: 6,
    name: "الأنعام",
  },
  {
    id: 7,
    name: "الأعراف",
  },
  {
    id: 8,
    name: "الأنفال",
  },
  {
    id: 9,
    name: "التوبة",
  },
  {
    id: 10,
    name: "يونس",
  },
  {
    id: 11,
    name: "هود",
  },
  {
    id: 12,
    name: "يوسف",
  },
  {
    id: 13,
    name: "الرعد",
  },
  {
    id: 14,
    name: "إبراهيم",
  },
  {
    id: 15,
    name: "الحجر",
  },
  {
    id: 16,
    name: "النحل",
  },
  {
    id: 17,
    name: "الإسراء",
  },
  {
    id: 18,
    name: "الكهف",
  },
  {
    id: 19,
    name: "مريم",
  },
  {
    id: 20,
    name: "طه",
  },
  {
    id: 21,
    name: "الأنبياء",
  },
  {
    id: 22,
    name: "الحج",
  },
  {
    id: 23,
    name: "المؤمنون",
  },
  {
    id: 24,
    name: "النور",
  },
  {
    id: 25,
    name: "الفرقان",
  },
  {
    id: 26,
    name: "الشعراء",
  },
  {
    id: 27,
    name: "النمل",
  },
  {
    id: 28,
    name: "القصص",
  },
  {
    id: 29,
    name: "العنكبوت",
  },
  {
    id: 30,
    name: "الروم",
  },
  {
    id: 31,
    name: "لقمان",
  },
  {
    id: 32,
    name: "السجدة",
  },
  {
    id: 33,
    name: "الأحزاب",
  },
  {
    id: 34,
    name: "سبأ",
  },
  {
    id: 35,
    name: "فاطر",
  },
  {
    id: 36,
    name: "يس",
  },
  {
    id: 37,
    name: "الصافات",
  },
  {
    id: 38,
    name: "ص",
  },
  {
    id: 39,
    name: "الزمر",
  },
  {
    id: 40,
    name: "غافر",
  },
  {
    id: 41,
    name: "فصلت",
  },
  {
    id: 42,
    name: "الشوري",
  },
  {
    id: 43,
    name: "الزخرف",
  },
  {
    id: 44,
    name: "الدخان",
  },
  {
    id: 45,
    name: "الجاثية",
  },
  {
    id: 46,
    name: "الأحقاف",
  },
  {
    id: 47,
    name: "محمد",
  },
  {
    id: 48,
    name: "الفتح",
  },
  {
    id: 49,
    name: "الحجرات",
  },
  {
    id: 50,
    name: "ق",
  },
  {
    id: 51,
    name: "الزاريات",
  },
  {
    id: 52,
    name: "الطور",
  },
  {
    id: 53,
    name: "النجم",
  },
  {
    id: 54,
    name: "القمر",
  },
  {
    id: 55,
    name: "الرحمن",
  },
  {
    id: 56,
    name: "الواقعة",
  },
  {
    id: 57,
    name: "الحديد",
  },
  {
    id: 58,
    name: "المجادلة",
  },
  {
    id: 59,
    name: "الحشر",
  },
  {
    id: 60,
    name: "الممتحنة",
  },
  {
    id: 61,
    name: "الصف",
  },
  {
    id: 62,
    name: "الجمعة",
  },
  {
    id: 63,
    name: "المنافقون",
  },
  {
    id: 64,
    name: "التغابن",
  },
  {
    id: 65,
    name: "الطلاق",
  },
  {
    id: 66,
    name: "التحريم",
  },
  {
    id: 67,
    name: "الملك",
  },
  {
    id: 68,
    name: "القلم",
  },
  {
    id: 69,
    name: "الحاقة",
  },
  {
    id: 70,
    name: "المعارج",
  },
  {
    id: 71,
    name: "نوح",
  },
  {
    id: 72,
    name: "الجن",
  },
  {
    id: 73,
    name: "المزمل",
  },
  {
    id: 74,
    name: "المدثر",
  },
  {
    id: 75,
    name: "القيامة",
  },
  {
    id: 76,
    name: "الإنسان",
  },
  {
    id: 77,
    name: "المرسلات",
  },
  {
    id: 78,
    name: "النبأ",
  },
  {
    id: 79,
    name: "النازعات",
  },
  {
    id: 80,
    name: "عبس",
  },
  {
    id: 81,
    name: "التكوير",
  },
  {
    id: 82,
    name: "الإنفطار",
  },
  {
    id: 83,
    name: "المطففين",
  },
  {
    id: 84,
    name: "الإنشقاق",
  },
  {
    id: 85,
    name: "البروج",
  },
  {
    id: 86,
    name: "الطارق",
  },
  {
    id: 87,
    name: "الأعلي",
  },
  {
    id: 88,
    name: "الغاشية",
  },
  {
    id: 89,
    name: "الفجر",
  },
  {
    id: 90,
    name: "البلد",
  },
  {
    id: 91,
    name: "الشمس",
  },
  {
    id: 92,
    name: "الليل",
  },
  {
    id: 93,
    name: "الضحي",
  },
  {
    id: 94,
    name: "الشرح",
  },
  {
    id: 95,
    name: "التين",
  },
  {
    id: 96,
    name: "العلق",
  },
  {
    id: 97,
    name: "القدر",
  },
  {
    id: 98,
    name: "البينة",
  },
  {
    id: 99,
    name: "الزلزلة",
  },
  {
    id: 100,
    name: "العاديات",
  },
  {
    id: 101,
    name: "القارعة",
  },
  {
    id: 102,
    name: "التكاثر",
  },
  {
    id: 103,
    name: "العصر",
  },
  {
    id: 104,
    name: "الهمزة",
  },
  {
    id: 105,
    name: "الفيل",
  },
  {
    id: 106,
    name: "قريش",
  },
  {
    id: 107,
    name: "الماعون",
  },
  {
    id: 108,
    name: "الكوثر",
  },
  {
    id: 109,
    name: "الكافرون",
  },
  {
    id: 110,
    name: "النصر",
  },
  {
    id: 111,
    name: "المسد",
  },
  {
    id: 112,
    name: "الإخلاص",
  },
  {
    id: 113,
    name: "الفلق",
  },
  {
    id: 114,
    name: "الناس",
  },
];

// addEventListner To Close Sheikh List in Small Screens
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("icon-sheikh")) {
    const sheikhList = document.querySelector(".sorahs-list-ul-small-screens");
    if (sheikhList) {
      sheikhList.remove();
      document.querySelector(".icon-sheikh").classList.remove("open");
    }
  }
});

// Start Code
const listenType = "حفص عن عاصم - مرتل";

// Fetch Data
async function getData() {
  const response = await fetch(
    `https://www.mp3quran.net/api/v3/reciters?language=ar`
  );
  const data = await response.json();
  const allData = data.reciters;
  const allDataFiltering = allData.filter((one) =>
    one.moshaf.some((type) => type.name === listenType)
  );
  allDataFiltering.sort((a, b) => a.name.localeCompare(b.name));
  const allDataContainer = document.createElement("div"); // The Continer
  allDataContainer.className =
    "all-content-container bg-[#4f4b2926] py-[15px] h-[calc(100vh-96px)] flex border border-second rounded-md shadow-box relative overflow-hidden";
  container.textContent = "";
  allDataContainer.appendChild(audioElement);
  const mediaPlayer = document.createElement("div");
  mediaPlayer.className =
    "media-player-div absolute bg-second/60 backdrop-blur-md py-[5px] px-[15px] bottom-0 w-full h-[100px] right-0 flex items-center justify-between gap-[10px]";
  allDataContainer.appendChild(mediaPlayer);
  createIconToDisplaySheikhListInSmallScreens(
    allDataFiltering,
    allDataContainer
  );
  container.appendChild(allDataContainer);
  createAnimationDivForWaitingVoice();
  const stylesUl =
    "sheikh-list pt-[20px] pb-[15px] px-[15px] h-[calc(100%-85px)] hidden md:flex items-center justify-center gap-x-5 gap-y-8 flex-wrap overflow-x-hidden overflow-y-scroll";
  const stylesLi =
    "text-center cursor-pointer transition-all duration-300 rounded-md overflow-hidden hover:shadow-box";
  const stylesImg = "w-[160px] h-[160px] bg-second/60 rounded-md";
  const stylesP = "mt-3 text-second font-simibold pb-2";
  createShiekhList(
    stylesUl,
    stylesLi,
    stylesImg,
    stylesP,
    allDataFiltering,
    allDataContainer
  );
  chooseSheikh(undefined, allDataFiltering, allDataContainer);
}
getData();

// Sheikh List In Small Screens
function createIconToDisplaySheikhListInSmallScreens(data, allDataContainer) {
  const i = document.createElement("i");
  i.className =
    "fa-solid fa-ellipsis icon-sheikh block md:hidden absolute top-[7px] right-5 text-2xl text-second cursor-pointer";
  i.onclick = () => {
    if (i.classList.contains("open")) {
      i.classList.remove("open");
      document.querySelector(".sorahs-list-ul-small-screens").remove();
    } else {
      i.classList.add("open");
      const stylesUl =
        "sorahs-list-ul-small-screens absolute top-[32px] w-[200px] h-[calc(100%-50px)] overflow-y-auto shadow-box backdrop-blur-2xl bg-second/30 rounded-md right-[15px] transition-all duration-300 md:hidden";
      const stylesLi =
        "flex items-center gap-2 p-[5px] mx-[5px] rounded-md border-b border-second cursor-default";
      const stylesImg = "w-8 h-8 rounded-full bg-second";
      const stylesP = "text-sm";
      createShiekhList(
        stylesUl,
        stylesLi,
        stylesImg,
        stylesP,
        data,
        allDataContainer
      );
    }
  };
  allDataContainer.appendChild(i);
}

// Create Sheikh List
function createShiekhList(
  stylesUl,
  stylesLi,
  stylesImg,
  stylesP,
  data,
  allDataContainer
) {
  const allSheikhUl = document.createElement("ul");
  allSheikhUl.className = `${stylesUl}`;
  allDataContainer.appendChild(allSheikhUl);
  data.forEach(({ name }) => {
    shiekh.forEach((nameShiekh) => {
      if (name == nameShiekh.name) {
        const li = document.createElement("li");
        li.className = `shiekh-name  ${stylesLi}`;
        li.onclick = () => {
          document.querySelector(".sorahs-data-div").remove();
          createAnimationDivForWaitingVoice();
          chooseSheikh(li.textContent, data, allDataContainer);
        };
        const sheikhImage = document.createElement("img");
        sheikhImage.className = stylesImg;
        sheikhImage.src = nameShiekh.img;
        sheikhImage.alt = "صورة شيخ";
        li.appendChild(sheikhImage);
        allSheikhUl.appendChild(li);
        const p = document.createElement("p");
        p.className = stylesP;
        p.appendChild(document.createTextNode(nameShiekh.name));
        li.appendChild(p);
      }
    });
  });
}

// Choose Sheikh And Create List Of Sorahs
function chooseSheikh(shiekhChoosen = shiekh[0].name, data, allDataContainer) {
  const sheikhFilterWithSelected = data.filter(
    (one) => one.name === shiekhChoosen
  )[0];
  const sheikhFilterMoshafType = sheikhFilterWithSelected.moshaf.filter(
    (one) => one.name === listenType
  )[0];
  createSorahsListAndSheikhDiv(
    sheikhFilterWithSelected,
    sheikhFilterMoshafType,
    allDataContainer
  );
}

// Create The Right Part Of Main Div => all Sorahs List And Sheikh Info
function createSorahsListAndSheikhDiv(
  sheikhFilterWithSelected,
  sheikhFilterMoshafType,
  allDataContainer
) {
  const sheikh = shiekh.filter(
    (one) => one.name === sheikhFilterWithSelected.name
  )[0];
  const theSheikhSelected = { name: sheikh.name, img: sheikh.img };
  const sorahsData = document.createElement("div"); // sorahsData Container
  sorahsData.className =
    "sorahs-data-div py-[20px] px-[15px] w-full md:w-[230px] shrink-0 text-center overflow-hidden";
  allDataContainer.prepend(sorahsData);
  const stylesImage =
    "w-[100px] h-[100px] rounded-full mx-auto mb-[15px] bg-second animate-rotate-img";
  const stylesH3 = "font-bold text-second";
  sheikhInfoDivCreation(
    theSheikhSelected,
    undefined,
    stylesImage,
    stylesH3,
    sorahsData
  );
  // =====================================================================
  // Sorahs List
  const { server, surah_list } = sheikhFilterMoshafType;
  const surah_listArray = surah_list.split(",");

  createListOfAllSorahs(
    server,
    surah_listArray,
    sorahsData,
    theSheikhSelected,
    allDataContainer
  );
}

// All Sorahs List
function createListOfAllSorahs(
  server,
  surahList,
  sorahsData,
  theSheikhSelected,
  allDataContainer
) {
  const ulSorahNameDiv = document.createElement("ul");
  ulSorahNameDiv.className =
    "sorahs-list-ul overflow-y-auto h-[calc(100%-224px)] mt-[20px] pb-5";
  surahList.forEach((surah, surahIndex) => {
    sorahsName.forEach((one) => {
      if (+surah == one.id) {
        const li = document.createElement("li");
        li.className = `li-surah flex items-center justify-between gap-2 p-[10px] mx-2 border-b border-second rounded-md cursor-pointer
          ${surahIndex === 0 ? "active" : "text-second"}
          `;
        li.dataset.number = surah;
        const spanNumber = document.createElement("span");
        spanNumber.appendChild(document.createTextNode(surah));
        li.appendChild(spanNumber);
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(one.name));
        li.appendChild(p);
        li.onclick = () => {
          clearInterval(timerInterval);
          document
            .querySelectorAll(".li-surah")
            .forEach((one) => one.classList.remove("active"));
          li.classList.add("active");
          createAnimationDivForWaitingVoice();
          createAudio(server, one.id.toString(), surahList);
        };
        ulSorahNameDiv.appendChild(li);
      }
    });
  });
  sorahsData.appendChild(ulSorahNameDiv);
  createAudio(server, surahList[0], surahList);
}

// Create Audio Section
function createAudio(server, surahNumber, surahList) {
  // Put Src To Audio Element
  audioElement.src = `${server}${surahNumber.padStart(3, "0")}.mp3`;

  // Create Container Of Media Player
  const mediaPlayerDiv = document.querySelector(".media-player-div");
  mediaPlayerDiv.textContent = "";
  // Start First Section Volume Input
  const divValumeAndLoopValume = document.createElement("div");
  divValumeAndLoopValume.className =
    "div-volume w-[calc((100%/4)-10px)] flex items-start sm:items-center flex-col sm:flex-row gap-[10px]";
  const buttonValume = document.createElement("button");
  buttonValume.className = " w-8 flex text-second";
  buttonValume.title = "مستوي الصوت";
  buttonValume.type = "button";
  const iconValume = document.createElement("i");
  iconValume.className = "fa-solid fa-volume-high volume-icon";
  iconValume.onclick = () => {
    muteOrNotVolume(iconValume);
  };
  buttonValume.appendChild(iconValume);
  divValumeAndLoopValume.appendChild(buttonValume);
  const inputRange = document.createElement("input");
  inputRange.type = "range";
  inputRange.step = "0.01";
  inputRange.max = "1";
  inputRange.title = "مستوي الصوت";
  inputRange.className =
    "input-volume w-full appearance-none h-[5px] bg-second rounded-full outline-none";
  inputRange.oninput = function () {
    changeVolume(inputRange);
  };
  divValumeAndLoopValume.appendChild(inputRange);
  mediaPlayerDiv.appendChild(divValumeAndLoopValume);
  // End First Section Volume Input

  // Start Second Section Play and Stop Media
  const playAndStopDiv = document.createElement("div");
  playAndStopDiv.className =
    "flex-1 max-w-[450px] mx-auto flex items-center justify-between flex-col gap-[10px]";

  // Sum Timing Container
  const timerDiv = document.createElement("div");
  timerDiv.className =
    "flex items-center justify-between gap-5 w-full sm:w-[250px] mx-auto text-second font-bold";
  const pMax = document.createElement("p");
  pMax.className = "p-max";
  pMax.textContent = "00:00";
  timerDiv.appendChild(pMax);
  const pTimerCounter = document.createElement("p");
  pTimerCounter.className = "p-timer-counter";
  pTimerCounter.textContent = "00:00";
  timerDiv.appendChild(pTimerCounter);
  playAndStopDiv.appendChild(timerDiv);

  // Input Progress
  const inputRangeSurahProgress = document.createElement("input");
  inputRangeSurahProgress.className =
    "input-volume-progress appearance-none h-[5px] bg-second w-full rotate-180 rounded-full outline-none";
  inputRangeSurahProgress.type = "range";
  inputRangeSurahProgress.title = "تقدم السورة";
  inputRangeSurahProgress.value = "0";
  inputRangeSurahProgress.oninput = () => {
    inputProgressChangeValue(inputRangeSurahProgress);
  };
  playAndStopDiv.appendChild(inputRangeSurahProgress);

  // Play Icon Container
  const playIconsContainer = document.createElement("div");
  playIconsContainer.className = "flex items-center justify-between w-full";
  playAndStopDiv.appendChild(playIconsContainer);

  // Repeat Icon
  const repeatIcon = document.createElement("i");
  repeatIcon.title = "تكرار السورة";
  repeatIcon.className =
    "fa-solid fa-repeat cursor-pointer w-[32px] h-[32px] bg-white text-second rounded-[10px] flex items-center justify-center shadow-box";
  repeatIcon.onclick = () => {
    repeatVolume(repeatIcon);
  };
  playIconsContainer.appendChild(repeatIcon);

  // Forward Button
  const forwardIcon = document.createElement("i");
  forwardIcon.title = "السورة التالية";
  forwardIcon.className = `fa-solid fa-forward-step w-[32px] h-[32px] bg-white text-second rounded-[10px] flex items-center justify-center shadow-box
    ${
      surahNumber == surahList[surahList.length - 1]
        ? "cursor-not-allowed"
        : "cursor-pointer"
    }
    `;
  forwardIcon.onclick = () => {
    if (surahNumber != surahList[surahList.length - 1]) {
      forwardAndBackwardIcon(server, ++surahNumber);
    }
  };
  playIconsContainer.appendChild(forwardIcon);

  // Play Button
  const playIcon = document.createElement("i");
  playIcon.title = "التشغيل أو الإيقاف";
  playIcon.className =
    "fa-solid fa-play play-icon cursor-pointer w-[32px] h-[32px] bg-white text-second rounded-[10px] flex items-center justify-center shadow-box";
  playIcon.onclick = function () {
    playMedia("button");
  };
  playIconsContainer.appendChild(playIcon);

  // backword Button
  const backwordIcon = document.createElement("i");
  backwordIcon.title = "السورة السابقة";
  backwordIcon.className = `fa-solid fa-backward-step w-[32px] h-[32px] bg-white text-second rounded-[10px] flex items-center justify-center shadow-box
    ${surahNumber == surahList[0] ? "cursor-not-allowed" : "cursor-pointer"}
    `;
  backwordIcon.onclick = () => {
    if (surahNumber != surahList[0]) {
      forwardAndBackwardIcon(server, --surahNumber);
    }
  };
  playIconsContainer.appendChild(backwordIcon);
  mediaPlayerDiv.appendChild(playAndStopDiv);
  // End Second Section Play and Stop Media
}

// playMediaFunction
function playMedia(from) {
  const playIcon = document.querySelector(".play-icon");
  if (playIcon.classList.contains("fa-play")) {
    const inputVolumeProgress = document.querySelector(
      ".input-volume-progress"
    );
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    inputVolumeProgress.max = audioElement.duration.toString();
    audioElement.play();
    startTimer();
    interval500 = setInterval(() => {
      inputVolumeProgress.value = audioElement.currentTime.toString();
      if (audioElement.currentTime === audioElement.duration) {
        clearInterval(interval500);
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
        inputVolumeProgress.value = "0";
      }
    }, 500);
  } else {
    if (from === "button") {
      playIcon.classList.add("fa-play");
      playIcon.classList.remove("fa-pause");
      audioElement.pause();
      clearInterval(timerInterval);
    }
  }
}

// The Sheikh Div Create Name And Image
function sheikhInfoDivCreation(
  sheikhInfoObject,
  styleDiv,
  stylesImg,
  stylesH3,
  element
) {
  const { name, img } = sheikhInfoObject;
  const sheikhInfoDiv = document.createElement("div");
  sheikhInfoDiv.className = styleDiv;
  element.appendChild(sheikhInfoDiv);
  const shiekhImage = document.createElement("img");
  shiekhImage.className = stylesImg;
  shiekhImage.src = img;
  shiekhImage.alt = "صورة الشيخ";
  sheikhInfoDiv.appendChild(shiekhImage);
  const titleSheikh = document.createElement("h3");
  titleSheikh.className = stylesH3;
  sheikhInfoDiv.appendChild(titleSheikh);
  titleSheikh.appendChild(document.createTextNode(name));
}

// Audio After LoadedMetaData
audioElement.onloadedmetadata = () => {
  document.querySelector(".input-volume-progress").max =
    audioElement.duration.toString();
  document.querySelector(".listen-div-animation").remove();
  sumTiming(audioElement.duration.toString());
  changeVolume(document.querySelector(".input-volume"));
};

// Animation For Waiting loadedmetadata Of Audio Element
function createAnimationDivForWaitingVoice() {
  const animationDiv = document.createElement("div");
  animationDiv.className =
    "listen-div-animation flex items-center justify-center px-[15px] absolute top-0 left-0 w-full h-full bg-second/60 backdrop-blur-[10px]";
  const spanAnimation = document.createElement("span");
  spanAnimation.className =
    "circle mr-3 w-11 h-11 border-[6px] border-[#4f4b29]/20 border-t-[#4f4b29] rounded-full animate-spin-fast";
  animationDiv.appendChild(spanAnimation);
  document.querySelector(".all-content-container").appendChild(animationDiv);
}

// Destuction Time
function destructionTime(time) {
  let hours = Math.floor(time / 3600) || 0;
  let minutes = Math.floor((time % 3600) / 60) || 0;
  let seconds = Math.floor(time % 60) || 0;

  return { hours, minutes, seconds };
}

// The Total Duration Of Surah
function sumTiming(maxTime) {
  const { hours, minutes, seconds } = destructionTime(maxTime);
  const pMaxElement = document.querySelector(".p-max");
  if (+hours !== 0) {
    pMaxElement.textContent = `${
      hours.toString().padStart(2, "0") + ":"
    }${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    pMaxElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}

// Start The Counter
function startTimer() {
  const pCounterElement = document.querySelector(".p-timer-counter");
  const { hours, minutes, seconds } = destructionTime(audioElement.currentTime);
  let theHours = Math.floor(hours) || 0;
  let theMinuts = Math.floor(minutes);
  let theSeconds = Math.floor(seconds);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    theSeconds++;
    if (theSeconds === 60) {
      theSeconds = 0;
      theMinuts++;
    }
    if (theMinuts === 60 && theSeconds === 60) {
      theHours++;
    }
    if (theHours !== 0) {
      pCounterElement.textContent = `${theHours
        .toString()
        .padStart(2, "0")}:${theMinuts.toString().padStart(2, "0")}:${theSeconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      pCounterElement.textContent = `${theMinuts
        .toString()
        .padStart(2, "0")}:${theSeconds.toString().padStart(2, "0")}`;
    }
    if (
      Math.ceil(audioElement.currentTime) === Math.floor(audioElement.duration)
    ) {
      if (audioElement.loop) {
        theHours = 0;
        theMinuts = 0;
        theSeconds = 0;
      } else {
        pCounterElement.textContent = "00:00";
        clearInterval(timerInterval);
      }
    }
  }, 1000);
}

// When We Change The Input Value
function inputProgressChangeValue(inputRangeSurahProgress) {
  audioElement.currentTime = inputRangeSurahProgress.value;
  audioElement.play();
  playMedia();
  startTimer();
}

// When We Change The Volume
function changeVolume(inputRangeVolume) {
  const value = inputRangeVolume.value;
  const volumeIcon = document.querySelector(".volume-icon");
  const high = "fa-volume-high";
  const low = "fa-volume-low";
  const mute = "fa-volume-xmark";
  audioElement.volume = value;

  if (+inputRangeVolume.value <= 0.49 && +inputRangeVolume.value !== 0) {
    volumeIcon.classList.remove(high);
    volumeIcon.classList.remove(mute);
    volumeIcon.classList.add(low);
  } else if (+inputRangeVolume.value >= 0.5) {
    volumeIcon.classList.remove(low);
    volumeIcon.classList.remove(mute);
    volumeIcon.classList.add(high);
  } else {
    volumeIcon.classList.remove(low);
    volumeIcon.classList.remove(high);
    volumeIcon.classList.add(mute);
  }
}

// When we Mute Or not
function muteOrNotVolume(iconValume) {
  const high = "fa-volume-high";
  const low = "fa-volume-low";
  const mute = "fa-volume-xmark";

  if (
    iconValume.classList.contains(high) ||
    iconValume.classList.contains(low)
  ) {
    iconValume.classList.remove(low);
    iconValume.classList.remove(high);
    iconValume.classList.add(mute);
    audioElement.volume = 0;
    document.querySelector(".input-volume").value = "0";
  } else {
    iconValume.classList.add(high);
    iconValume.classList.remove(mute);
    audioElement.volume = 1;
    document.querySelector(".input-volume").value = "1";
  }
}

// Repeat Volume Icon
function repeatVolume(repeatIcon) {
  if (repeatIcon.classList.contains("bg-white")) {
    repeatIcon.classList.remove("bg-white");
    repeatIcon.classList.remove("text-second");
    repeatIcon.classList.add("bg-second");
    repeatIcon.classList.add("text-white");
    audioElement.loop = true;
  } else {
    repeatIcon.classList.add("bg-white");
    repeatIcon.classList.add("ext-second");
    repeatIcon.classList.remove("bg-second");
    repeatIcon.classList.remove("text-white");
    audioElement.loop = false;
  }
}

function forwardAndBackwardIcon(server, surahNumber) {
  const inputProgress = document.querySelector(".input-volume-progress");
  const pTimerCounter = document.querySelector(".p-timer-counter");
  const playIcon = document.querySelector(".play-icon");
  clearInterval(interval500);
  clearInterval(timerInterval);
  audioElement.src = `${server}${surahNumber.toString().padStart(3, "0")}.mp3`;
  pTimerCounter.textContent = "00:00";
  inputProgress.value = "0";
  playIcon.classList.remove("fa-pause");
  playIcon.classList.add("fa-play");
  createAnimationDivForWaitingVoice();
  document.querySelectorAll(".li-surah").forEach((one) => {
    one.classList.remove("active");

    one.dataset.number == surahNumber && one.classList.add("active");
  });
}

// https://abdoahmed26.github.io/api/arabic.json
// https://www.mp3quran.net/api/v3/reciters?language=ar
