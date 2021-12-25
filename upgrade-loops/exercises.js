//Iteración #1
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Camiseta")) {
    console.log(products[i]);
  }
}

//Iteración #2
const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

function checkApproves(alumns) {
  for (let i = 0; i < alumns.length; i++) {
    if (
      (alumns[i].T1 && alumns[i].T2) ||
      (alumns[i].T1 && alumns[i].T3) ||
      (alumns[i].T2 && alumns[i].T3)
    ) {
      alumns[i].isApproved = true;
    } else {
      alumns[i].isApproved = false;
    }
  }
}

checkApproves(alumns);
console.log(alumns);

//Iteración #3
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const element of placesToTravel) {
  console.log(element);
}

//Iteración #4
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const key in alien) {
  console.log(key + ": " + alien[key]);
}

//Iteración #5
const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function deleteElements(array) {
  for (let key = 0; key < array.length; key++) {
    if (array[key].id == 11 || array[key].id == 40) {
      array.splice(key, 1);
    }
  }
  console.log(array);
}
deleteElements(placesToTravel);

//with for in
function deleteElements2(array) {
  for (const key in array) {
    if (array[key].id == 11 || array[key].id == 40) {
      array.splice(key, 1);
    }
  }
  console.log(array);
}
deleteElements2(placesToTravel);

//Iteración #6
const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (const i of toys) {
  if (i.name.includes("gato")) {
    toys.splice(toys.indexOf(i));
  }
}
console.log(toys);

//Iteración #7
const popularToys = [];
const toys = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (const iterator of toys) {
  if (iterator.sellCount > 15) {
    popularToys.push(iterator);
  }
}

console.log(popularToys);
