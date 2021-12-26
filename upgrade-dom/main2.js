// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv2 = document.createElement("div");
let newP = document.createElement("p");
newDiv2.appendChild(newP);
document.body.appendChild(newDiv2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDiv3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
    let newP = document.createElement("p");
    newDiv3.appendChild(newP);
}
document.body.appendChild(newDiv3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP2 = document.createElement("p");
newP2.textContent = "Soy dinámico!";
document.body.appendChild(newP2);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let newUnorderedList = document.createElement("ul");
for (const app of apps) {
    let newListItem = document.createElement("li");
    newListItem.textContent = app;
    newUnorderedList.appendChild(newListItem);
}
document.body.appendChild(newUnorderedList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let nodes = document.querySelectorAll(".fn-remove-me"); 
for (const element of nodes) {
    element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let newP3 = document.createElement("p");
divs = document.querySelectorAll("div");
newP3.textContent = "Voy en medio!";
document.body.insertBefore(newP3, divs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let divsWithClasses = document.querySelectorAll(".fn-insert-here");
for (const div of divsWithClasses) {
    let newP4 = document.createElement("p");
    newP4.textContent = "Voy dentro!"
    div.appendChild(newP4);
}