import "./styles.css";

const initial_content = `&#127856;
Happy
Birthday &#127881;
To
You! &#9992;`;

document.querySelector("#inputarea").innerHTML = initial_content;

document.querySelector("#inputbutton").addEventListener("click", pushButton);

function pushButton() {
  let content_array = "";

  let textarea_input = document.querySelector("#inputarea").value;

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
