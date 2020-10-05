import "./styles.css";

const initial_content = `&#127856;
Happy
Birthday &#127881;
To
You! &#9992;`;

const queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
document.querySelector("#name").innerHTML = searchParams.get("m");

if (searchParams.get("m") == null) {
  console.log("is null");
  createSlides();
} else {
  console.log(searchParams.get("m"));
  displaySlides(searchParams.get("m"));
}

function createSlides() {
  document.querySelector("#inputarea").innerHTML = initial_content;

  document.querySelector("#inputbutton").addEventListener("click", pushButton);
}

function pushButton() {
  let textarea_input = document.querySelector("#inputarea").value;
  //const content_encoded = encodeURI(initial_content);
  //console.log(content_encoded);
  //document.querySelector("#sendurl").innerHTML = content_encoded;
  displaySlides(textarea_input);
}

function displaySlides(textarea_input) {
  let content_array = "";
  content_array = textarea_input.split(/\r?\n/);
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
