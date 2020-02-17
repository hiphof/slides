import "./styles.css";

document.querySelector("#app").innerHTML = `
<h1>&#127873; Make some greeting slides! <a href="https://github.com/hiphof/slides">source</a></h1>
<div>
<form>
  <textarea id="inputarea" rows="6">
&#127856;
Happy
Birthday &#127881;
To
You! &#9992;
</textarea>
  <br><button  id="inputbutton">Make some slides!</button>
  </div>
  </form>
  <div id="hier"></div>
`;
// onclick="location.href='slides.html';"
document.querySelector("#inputbutton").addEventListener("click", pushbutton);

function pushbutton() {
  let text_array = "";
  //console.log("dirk");
  let inputvalue = document.querySelector("#inputarea").value;
  console.log(inputvalue);
  //document.querySelector("#hier").innerHTML =
  //  '<a href="slides.html">' + inputvalue + "</a>";
  text_array = inputvalue.split(/\r?\n/);
  console.log(text_array);
  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").style.display = "none";

  console.log("piet" + text_array[1]);
  //return text_array;

  console.log("oke" + text_array[1]);
  document.querySelector("#slides").style.display = "flex";
  //hoi
  //`;
  let step = 0;
  let somewhere = document.querySelector("#slides");
  somewhere.addEventListener("click", myfunction);

  function myfunction() {
    console.log("hoi" + text_array[1]);
    document.querySelector("#slides").innerHTML = text_array[step];
    document.body.style.backgroundColor = getRandomColor();
    step += 1;

    console.log(step);
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
