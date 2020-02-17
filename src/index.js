import "./styles.css";

const initial_content = `
&#127856;
Happy
Birthday &#127881;
To
You! &#9992;`;

document.querySelector("#app").innerHTML =
  `
<h1>&#127873; Make some greeting slides! <a href="https://github.com/hiphof/slides">source</a></h1>
<div>
<form>
  <textarea id="inputarea" rows="6">` +
  initial_content +
  `</textarea>
  <br><button  id="inputbutton">Make some slides!</button>
  </div>
  </form>
`;

document.querySelector("#inputbutton").addEventListener("click", pushButton);

function pushButton() {
  let content_array = "";

  let input_value = document.querySelector("#inputarea").value;

  content_array = input_value.split(/\r?\n/);

  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").style.display = "none";

  // Start slides part
  document.querySelector("#slides").style.display = "flex";

  let step = 0;
  let somewhere = document.querySelector("#slides");
  somewhere.addEventListener("click", clickedSomewhere);

  function clickedSomewhere() {
    document.querySelector("#slides").innerHTML = content_array[step];
    document.body.style.backgroundColor = getRandomColor();
    step += 1;
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
