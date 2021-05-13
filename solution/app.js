const back = document.getElementById("container");
const switchButton = document.getElementById("switchButton");

switchButton.addEventListener("click", TurnOnOff);

let isOpen = true;

function TurnOnOff() {
  console.log(isOpen);
  isOpen = !isOpen;

  isOpen ? white() : black();
}

function white() {
  document.body.style.backgroundColor = "white";
  back.style.backgroundColor = "white";
  back.style.color = "black";
}

function black() {
  document.body.style.backgroundColor = "black";
  back.style.backgroundColor = "black";
  back.style.color = "white";
}
