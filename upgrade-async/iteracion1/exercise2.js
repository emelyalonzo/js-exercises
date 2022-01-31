// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
const baseUrl = "https://api.nationalize.io";
const button = document.querySelector("button");

const search = (event) => {
  const inputText = document.querySelector("input");

  fetch(baseUrl + "?name=" + inputText.value)
    .then((res) => res.json())
    .then((resData) => {
      createPerson(resData);
    });
};

const createPerson = (person) => {
  let textPerson = `El nombre ${person.name} tiene`;

  for (const country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    textPerson += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  const divPerson = document.createElement("div");
  const pPerson = document.createElement("p");
  const buttonDelete = document.createElement("button");

  pPerson.textContent = textPerson;
  buttonDelete.innerHTML = "X";

  divPerson.appendChild(pPerson);
  divPerson.appendChild(buttonDelete);

  buttonDelete.addEventListener("click", () => {
    divPerson.remove()
  });
  
  document.body.appendChild(divPerson);
};

button.addEventListener("click", search);