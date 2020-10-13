import "./styles.css";
import { Base64 } from "js-base64";

const initial_content = `&#127856;
Happy
Birthday &#127881;
To
You! &#9992;`;

const queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
document.querySelector("#name").innerHTML = searchParams.get("m");

if (searchParams.get("m") == null) {
  //console.log("is null");
  createSlides();
} else {
  //console.log(searchParams.get("m"));
  displaySlides(searchParams.get("m"));
}

function createSlides() {
  document.querySelector("#inputarea").innerHTML = initial_content;

  document.querySelector("#inputbutton").addEventListener("click", pushButton);
}

function pushButton() {
  document.querySelector("#sendurl").style.display = "flex";
  let textarea_input = document.querySelector("#inputarea").value;
  const content_encoded = Base64.encodeURI(textarea_input);
  let slidesUrl = window.location.origin + "/?m=" + content_encoded;

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    document.querySelector("#sendurl").innerHTML +=
      '<a href="whatsapp://send?text=' +
      slidesUrl +
      '">Share link via Whatsapp!</a>';
  } else {
    // false for not mobile device
    document.querySelector("#sendurl").innerHTML =
      '<a href="' + slidesUrl + '">' + slidesUrl + "</a>";
    //const clipboard = new ClipboardJS();
    //clipboard.on("success");
    //document.write("not mobile device");
  }
}

function displaySlides(encoded_message_get) {
  let content_array = "";
  let greeting_string = Base64.decode(encoded_message_get);
  content_array = greeting_string.split(/\r?\n/);
  let number_of_slides = content_array.length;
  console.log(number_of_slides);

  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").style.display = "none";

  // START slides part
  document.querySelector("#slides").style.display = "flex";

  let step = 0;
  let slides_div = document.querySelector("#slides");
  slides_div.addEventListener("click", clickedSlide);

  function clickedSlide() {
    if (step < number_of_slides) {
      document.querySelector("#slides").innerHTML = content_array[step];
      document.body.style.backgroundColor = getRandomColor();
      step += 1;
    }
  }
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
