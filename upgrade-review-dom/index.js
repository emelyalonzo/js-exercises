// // 1.1 Basandote en el array siguiente, crea una lista ul > li
// // dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// let countriesUl = document.createElement("ul");
// for (const country of countries) {
//   let item = document.createElement("li");
//   item.innerText = country;
//   countriesUl.appendChild(item);
// }
// document.body.appendChild(countriesUl);
// console.log(countries);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
let divToAdd = document.querySelector('[data-function="printHere"]');
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let carsUl = document.createElement("ul");
for (const car of cars) {
  let item = document.createElement("li");
  item.textContent = car;
  carsUl.appendChild(item);
}
divToAdd.appendChild(carsUl);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const images = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let listImages = document.createElement("ul");
document.body.appendChild(listImages);
for (const image of images) {
  let imageDiv = document.createElement("div");
  imageDiv.innerHTML = `<h4>${image.title}</h4><img src=${image.imgUrl}/>`;


  // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
  // elementos de las listas que elimine ese mismo elemento del html.
  let myBtn = document.createElement("button");
  myBtn.textContent = "Delete this image";
  imageDiv.appendChild(myBtn);
  myBtn.addEventListener("click", () => {
    imageDiv.remove();
  });

  listImages.appendChild(imageDiv);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
const deleteLastBtn = document.querySelector("#delete-element");
deleteLastBtn.addEventListener("click", () => {
  const imagesDivs = document.querySelectorAll("div");
  imagesDivs[imagesDivs.length - 1].remove();
});
