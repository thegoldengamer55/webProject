function colorChange() {
  document.getElementById("button1").style.background = "blue";
  document.getElementById("button1").style.color = "red";
}

function buttonChanger() {
  buttonReverse();
  buttonColorer();
}

function buttonColorer() {
  let button2 = document.getElementById("button2");
  button2.style.background = "green";
  button2.style.color = "cyan";
  button2.style.width = "100%";
  button2.style.height = "100%";
}
function buttonReverse() {
  let button2 = document.getElementById("button2");
  button2.style.background = "white";
  button2.style.color = "black";
  button2.style.width = "50%";
  button2.style.height = "10%";
}
