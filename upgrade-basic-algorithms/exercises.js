//Iteración #1
// 1.1 Create a variable named myFavoriteHero, which value is Hulk.
const myFavouriteHero = "Hulk";
// 1.2 Create a variable called x, which value is 50.
const x = 50;
// 1.3 Create a variable called 'h' which value is 5 and other variable called 'y' with value 10. 
const h = 5;
const y = 10;
// 1.4 Create a variable called 'z' which value is 'h' + 'y'.
const z = h + y;

//Iteración #2
// 1.1 Change the value of the property 'age' to 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

// 1.2 
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.");

// 1.3 
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

// 1.4 
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

//Iteración#3
// 1.1 
let mul = 10 * 5;
console.log(mul);
// 1.2 
let divi = 10 / 2;
console.log(divi);
// 1.3 
let resto = 15 % 9;
console.log(resto);
// 1.4
const y2 = 10;
const z2 = 5;
const res = y2 + z2;
// 1.5 
const res2 = y2 * z2;


//Iteracion#4
// 1.1 
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let favorite = avengers[0];
// 1.2 
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1.splice(0,1,"IRON MAN");
// 1.3 
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers2.length);
// 1.4 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty','Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
// 1.5 
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]);

// 1.6 
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3);

// Iteración #5
const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5 == number1) && (number1 * 2 == number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2 == number1) || (number1 / 5 == number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}