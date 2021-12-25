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
