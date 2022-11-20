// script for search bar start 
const page1 = document.getElementById("qurancom");
const page2 = document.getElementById("quranxcom");
const page3 = document.getElementById("sunnah");
const page4 = document.getElementById("isnad");
function myfunc() {
  var surah = document.getElementById("surah");
  var ayah = document.getElementById("ayah");
  // alert(input.value);
  page2.src =
    "https://quranx.com/hadiths/" + surah.value + "." + ayah.value + "";

  page1.src =
    "https://quran.com/" +
    surah.value +
    "?startingVerse=" +
    ayah.value +
    "";
}

function mytextfunc() {
  var iptext = document.getElementById("iptext");
  page3.src = "https://sunnah.com/search?q=" + iptext.value + "";
  page4.src = "https://isnad.io/ahadith?query=" + iptext.value + "";
}

/* script for search bar end */