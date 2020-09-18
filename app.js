console.log("js working");

let color = ["red", "blue", "orange", "gray", "purple"];
let i = 0;

function changeColor() {
  if (i === 5) i = 0;
  document.getElementById("body").style.backgroundColor = `${color[i]}`;
  document.getElementById(
    "background"
  ).innerText = `Background Color: ${color[i]}`;
  i++;
}

let ishex = Boolean;
function hexFunction() {
  return ishex == true ? false : true;
}
document.getElementById("hex").click(hexFunction());

console.log(hexFunction());
