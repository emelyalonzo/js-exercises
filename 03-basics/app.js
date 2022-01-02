// Exercise 1 -> over
const over = () => {
  document.getElementById('logo').classList.add('background-red');
};

// Exercise 1 -> out  
const out = () => {
  document.getElementById('logo').classList.remove('background-red');
};
  
// Exercise 3 -> onkeyup
const toUpperInput = (text) => {
  text.value = text.value.toUpperCase();
};

// Exercise 4 -> OnClick
let myFinder = ["Wolverine", "Storm", "IronMan", "Hulk"];

const searchMarvel = () => {

  let inputFinder = document.getElementById("input-finder").value;
  let div1 = document.createElement("div");
  div1.setAttribute("id","div1");
  let p1 = document.createElement("p");
  let busqueda = myFinder.find((element) => element.toUpperCase() === inputFinder);
  if (busqueda === undefined) {
    p1.innerText = 'No hemos encontrado ' + inputFinder;
  } else {
    p1.innerText = 'Lo hemos encontrado ' + inputFinder;
  }
  div1.appendChild(p1);
  document.querySelector("body");
  document.body.appendChild(div1);  
  document.getElementById("div1").appendChild(p1);
};